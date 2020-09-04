import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'expo-linear-gradient';
import Home, { screenOptions as homeScreenOptions } from '../screens/home/Home';
import BillsList, { screenOptions as billsListScreenOptions } from '../screens/bills/BillsList';
import Theme from '../constants/Theme';

const StackNavigator = createStackNavigator();

const defaultNavigationOptions = {
  headerTransparent: true,
  headerTintColor: Theme.colors.text.secondary,
  cardStyle: {
    backgroundColor: 'transparent',
  },
};

export const AppNavigator = () => {
  return (
    <StackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <StackNavigator.Screen name="Home" component={Home} options={homeScreenOptions} />
      <StackNavigator.Screen
        name="BillsList"
        component={BillsList}
        options={billsListScreenOptions}
      />
    </StackNavigator.Navigator>
  );
};
