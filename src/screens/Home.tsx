import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Props} from '../types';
import {useAuth} from '../context/AuthContext';
import {getToken} from '../utils';

export default function Home({navigation, route}: Props) {
  const {logout} = useAuth();
  const [message, setMessage] = useState();

  useEffect(() => {
    loadMessage();
  }, []);

  const handleLogout = async () => {
    console.log('logged out');
    await logout();
  };

  const loadMessage = async () => {
    let userData = await getToken();
    setMessage(JSON.parse(userData)?.message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greetText}>{message}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  greetText: {
    fontSize: 20,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#F72045',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  logoutText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
