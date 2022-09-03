import React from 'react';
import {Text} from '../text/Text';
import {View} from 'react-native';
import {Icon} from '@rneui/themed';
import {DefaultStyle} from '../../styles/DefaultStyle';
import {styles} from './RatioIcon.styles';

interface RatioIconProps {
  value: String;
}

export function RatioIcon(props: RatioIconProps) {
  const {value} = props;

  return value > '0' ? (
    <View style={[DefaultStyle.setCol, styles.upBackground]}>
      <Icon type="antdesign" size={20} name="caretup" color="#FF0000" />
      <Text style={[styles.ratioText, styles.upText]}>+{value} %</Text>
    </View>
  ) : (
    <View style={[DefaultStyle.setCol, styles.downBackground]}>
      <Icon type="antdesign" size={20} name="caretdown" color="#027F00" />
      <Text style={[styles.ratioText, styles.downText]}>{value} %</Text>
    </View>
  );
}
