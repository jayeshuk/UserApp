import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
