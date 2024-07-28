import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from './src/screens/Registration';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={{headerShown: false}} />
        <Screen name="Login" component={Login} options={{headerShown: false}} />
        <Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
