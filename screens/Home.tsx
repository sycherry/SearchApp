import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {DefaultStyle} from '../styles/DefaultStyle';
import {styles} from './Home.styles';
import {HomeProps} from './Home.props.';
import {Avatar} from '@rneui/themed';
import {Header} from '../components/header/Header';
import {Item} from '../components/item/Item';
import {Text} from '../components/text/Text';
import {ListItem} from '@rneui/themed';
import {initialData} from './InitialData';

export const Home: React.FC<HomeProps> = ({route, navigation}) => {
  const [selectedItem, setSelectedItem] = useState(initialData);
  const LinkToItem = () => navigation.navigate('ItemList', {returnTo: 'Home'});
  const sampleAvaterUrl =
    'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg';

  useEffect(() => {
    if (route.params) {
      setSelectedItem([
        ...selectedItem,
        {symbol: route.params.symbol, id: route.params.id},
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  //console.log("Json", JSON.stringify(selectedItem, null, 2));

  return (
    <SafeAreaView style={DefaultStyle.container}>
      <Header
        onRightPress={LinkToItem}
        rightText={'ADD'}
        headerText="My page"
      />
      <ScrollView>
        <View style={DefaultStyle.row}>
          <View style={styles.profile}>
            <View style={DefaultStyle.setCol}>
              <View style={styles.col1}>
                <Avatar
                  size={100}
                  rounded
                  source={{
                    uri: sampleAvaterUrl,
                  }}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.profileName}>Sarah Parker</Text>
              </View>
            </View>
          </View>
          {selectedItem.map((item, i) => (
            <View key={i} style={styles.listWrap}>
              <ListItem>
                <Item item={item.symbol} />
              </ListItem>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
