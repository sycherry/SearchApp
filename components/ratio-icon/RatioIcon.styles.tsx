import {StyleSheet} from 'react-native';
import {palette} from '../../styles/Color';

export const styles = StyleSheet.create({
  ratioText: {
    marginLeft: 5,
  },
  upBackground: {
    backgroundColor: palette.lightRed,
  },
  upText: {
    color: palette.red,
  },
  downBackground: {
    backgroundColor: palette.lightGreen,
  },
  downText: {
    color: palette.green,
  },
});
