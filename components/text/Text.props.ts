import {StyleProp, TextProps as TextProperties, TextStyle} from 'react-native';
export interface TextProps extends TextProperties {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}
