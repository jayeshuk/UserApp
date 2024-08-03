import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Props} from '../types';
import {removeToken} from '../utilities';

export default function Home({navigation, route}: Props) {
  const handleLogout = async () => {
    await removeToken();
    navigation.navigate("Login")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greetText}>{route.params?.message}</Text>
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
