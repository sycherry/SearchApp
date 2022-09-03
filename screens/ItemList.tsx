import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {DefaultStyle} from '../styles/DefaultStyle';
import {useSelector, useDispatch} from 'react-redux';
import {getItems} from '../redux/reducers/Actions';
import {Text} from '../components/text/Text';
import {RatioIcon} from '../components/ratio-icon/RatioIcon';
import {ItemType} from '../models/ItemType';
import {ItemListProps} from './ItemList.props';
import {ListItem, Avatar, SearchBar} from '@rneui/themed';
import {styles} from './ItemList.styles';

export const ItemList: React.FC<ItemListProps> = ({route, navigation}) => {
  const onSelection = (item: any) => {
    navigation.navigate(route.params.returnTo, {
      symbol: item.symbol,
      id: item.id,
    });
  };

  const dispatch = useDispatch<any>();
  const isItemLoading = useSelector(
    (state: any) => state.useReducer.isFetching,
  );
  const itemDataList = useSelector((state: any) => state.useReducer.items);
  const error = useSelector((state: any) => state.useReducer.error);

  if (error) {
    Alert.alert('Loading error');
  }

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const [search, setSearch] = useState('');

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  const filteredData = search
    ? itemDataList.data.filter((item: any) => {
        const itemData = item.symbol.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
    : itemDataList.data;

  const renderItem = ({item}: ListRenderItemInfo<ItemType>) => (
    <TouchableOpacity onPress={() => onSelection(item)}>
      <ListItem>
        <Avatar
          source={{
            uri: `https://messari.io/asset-images/${item.id}/64.png?v=2`,
          }}
        />
        <ListItem.Content>
          <View style={DefaultStyle.setCol}>
            <ListItem.Title style={DefaultStyle.listTitleOuter}>
              <Text style={DefaultStyle.listTitle}>{item.symbol}</Text>
            </ListItem.Title>

            <View>
              <Text style={DefaultStyle.listPrice}>
                <Text>$ {item.metrics.market_data.price_usd.toFixed(2)}</Text>
              </Text>

              <RatioIcon
                value={item.metrics.market_data.percent_change_usd_last_24_hours.toFixed(
                  2,
                )}
              />
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={DefaultStyle.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
      />
      {isItemLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};
