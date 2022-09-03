import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/Home';
import {ItemList} from '../screens/ItemList';
import {Provider as ReduxProvider} from 'react-redux';
import configureStoreWrap from '../redux/Store';

const store = configureStoreWrap();

export type NavigatorParamList = {
  Home: any;
  ItemList: {returnTo: any};
};

export default function RootNavigation() {
  const Stack = createStackNavigator<NavigatorParamList>();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ItemList" component={ItemList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
