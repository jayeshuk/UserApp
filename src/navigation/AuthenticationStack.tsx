import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from '../screens/Registration';
import Login from '../screens/Login';

const AuthStack = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
      <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};

export default AuthenticationStack;
