import React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {TextProps} from './Text.props';
import {DefaultStyle} from '../../styles/DefaultStyle';

export function Text(props: TextProps) {
  const {children, style: styleOverride} = props;

  const style = DefaultStyle.defaultText;
  const styles = [style, styleOverride];

  return <ReactNativeText style={styles}>{children}</ReactNativeText>;
}
