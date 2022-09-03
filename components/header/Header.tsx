import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {DefaultStyle} from '../../styles/DefaultStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HeaderProps} from './Header.props';
import {Text} from '../text/Text';

export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    rightText,
    leftIcon,
    headerText,
  } = props;

  const defaultIconSize = {width: 40};
  return (
    <View style={DefaultStyle.headerWrap}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftPress} style={defaultIconSize}>
          <AntDesign name={leftIcon} size={18} />
        </TouchableOpacity>
      ) : (
        <View style={defaultIconSize} />
      )}
      <Text style={DefaultStyle.title}>{headerText}</Text>
      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={defaultIconSize}>
          <AntDesign name={rightIcon} size={18} />
        </TouchableOpacity>
      ) : rightText ? (
        <TouchableOpacity onPress={onRightPress} style={defaultIconSize}>
          <Text style={DefaultStyle.headerText}>{rightText}</Text>
        </TouchableOpacity>
      ) : (
        <View style={defaultIconSize} />
      )}
    </View>
  );
}
