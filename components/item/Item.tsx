import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, Alert} from 'react-native';
import {DefaultStyle} from '../../styles/DefaultStyle';
import {Text} from '../text/Text';
import {RatioIcon} from '../ratio-icon/RatioIcon';
import {ItemProps} from './Item.props';
import {ListItem, Avatar} from '@rneui/themed';

export function Item(props: ItemProps) {
  const {item} = props;

  const [isItemLoading, setIsItemLoading] = useState<boolean>(true);
  const [itemDataList, setItemDataList] = useState(null);
  const getItemData = async () => {
    try {
      const response = await fetch(
        `https://data.messari.io/api/v1/assets/${item}/metrics/market-data`,
      );
      const json = await response.json();
      setItemDataList(json);
    } catch (error) {
      console.error(error);
      Alert.alert('Loading error');
    } finally {
      // This code is for testing of loading indicator
      // await wait(2)
      setIsItemLoading(false);
    }
  };
  useEffect(() => {
    getItemData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isItemLoading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <Avatar
            size={40}
            source={{
              uri: `https://messari.io/asset-images/${itemDataList?.data.Asset.id}/64.png?v=2`,
            }}
          />
          <ListItem.Content>
            <View style={DefaultStyle.setCol}>
              <ListItem.Title style={DefaultStyle.listTitleOuter}>
                <Text style={DefaultStyle.listTitle}>
                  {itemDataList?.data.Asset.symbol}
                </Text>
              </ListItem.Title>

              <View>
                <Text style={DefaultStyle.listPrice}>
                  $ {itemDataList?.data.market_data.price_usd.toFixed(2)}
                </Text>
                <RatioIcon
                  value={itemDataList?.data.market_data.percent_change_usd_last_24_hours.toFixed(
                    2,
                  )}
                />
              </View>
            </View>
          </ListItem.Content>
        </>
      )}
    </>
  );
}
