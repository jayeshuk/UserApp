import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {loginUser} from '../api';
import {LoginUserRequest, Props} from '../types';
import {storeToken} from '../utils';
import {useAuth} from '../context/AuthContext';

export default function Login({navigation}: Props) {
  const [creds, setCreds] = useState({
    phone: '',
    password: '',
  });
  const {setIsAuthenticated} = useAuth();

  const handleLogin = async () => {
    try {
      const loginData: LoginUserRequest = {
        mobile: creds.phone,
        password: creds.password,
      };

      const loginResponse = await loginUser(loginData);
      console.log('User logged in successfully:', loginResponse);
      await storeToken(JSON.stringify(loginResponse));

      // Update the authentication state
      setIsAuthenticated(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error:', JSON.stringify(error));
      } else {
        console.error('An unknown error occurred');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Mobile Number"
        leftIcon={{type: 'material', name: 'phone'}}
        containerStyle={styles.inputContainer}
        value={creds.phone}
        onChangeText={(text: string) => setCreds({...creds, phone: text})}
      />
      <Input
        placeholder="Password"
        leftIcon={{type: 'material', name: 'lock'}}
        secureTextEntry
        containerStyle={styles.inputContainer}
        value={creds.password}
        onChangeText={(text: string) => setCreds({...creds, password: text})}
      />

      <Button
        title="Login"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.registerButton}
        titleStyle={styles.registerButtonTitle}
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  registerButton: {
    backgroundColor: '#007bff', // customize as needed
  },
  registerButtonTitle: {
    fontSize: 18,
  },
});
