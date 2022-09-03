import {StyleSheet} from 'react-native';
import {palette} from '../styles/Color';

export const styles = StyleSheet.create({
  col1: {
    width: 100,
  },
  col2: {
    width: 'auto',
    marginLeft: 20,
  },
  profile: {
    backgroundColor: palette.white,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: palette.gray,
  },
  listWrap: {
    paddingBottom: 15,
  },
});
