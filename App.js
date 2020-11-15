/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StatusBar,
} from 'react-native';

const Stack = createStackNavigator();

import DefaultWelcome from './src/App/DefaultWelcome';
import Quiz from './src/Quiz/Quiz';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DefaultWelcome"
            component={DefaultWelcome}
            options={{ title: 'Welcome Default' }}
          />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
