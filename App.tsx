import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './src/screens/Registration';

const { Navigator, Screen } = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Registration" component={Registration} options={{headerShown: false}} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;