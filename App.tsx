import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './src/navigation/AuthenticationStack';
import MainStackNavigator from './src/navigation/MainStack';
import {getToken} from './src/utils/';
import {AuthProvider, useAuth} from './src/context/AuthContext';

function App() {
  const {isAuthenticated, setIsAuthenticated} = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const userData = await getToken();
      setIsAuthenticated(userData?.token !== null);
      setLoading(false);
    };

    checkToken();
  }, [setIsAuthenticated]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStackNavigator /> : <AuthenticationStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
