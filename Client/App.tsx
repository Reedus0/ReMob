import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import { store } from './src/store';

export const Stack = createStackNavigator();

export default function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}
