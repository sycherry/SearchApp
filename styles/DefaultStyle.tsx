import {StyleSheet} from 'react-native';
import {palette} from './Color';

export const DefaultStyle = StyleSheet.create({
  defaultText: {
    color: palette.black,
  },
  container: {
    flex: 1,
  },
  row: {
    marginHorizontal: 15,
  },
  setCol: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  headerWrap: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: palette.blue,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  badgeWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: palette.red,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  badgeText: {
    color: palette.white,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  listTitleOuter: {
    flex: 1,
    marginLeft: 10,
  },
  listTitle: {
    fontSize: 18,
    color: '#969696',
    marginLeft: 20,
  },
  listPrice: {
    fontSize: 17,
    marginBottom: 10,
    color: '#969696',
  },
});
