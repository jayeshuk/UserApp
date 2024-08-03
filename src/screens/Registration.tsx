import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import appleAuth, {
  AppleRequestOperation,
  AppleRequestScope,
} from '@invertase/react-native-apple-authentication';

import SocialSignInButton from '../components/SocialSignInButton';
import {registerUser} from '../api';
import {RegisterUserRequest, Props} from '../types';

const Registration = ({navigation}: Props) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
  });

  const handleAppleLogin = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleRequestOperation.LOGIN,
        requestedScopes: [AppleRequestScope.EMAIL, AppleRequestScope.FULL_NAME],
      });

      console.log(appleAuthRequestResponse);
    } catch (error) {
      console.log(error);
      Alert.alert('Apple Sign-In Error', 'Failed to authenticate with Apple.');
    }
  };

  const handleValueChange = (key: string, value: string) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const handleUserRegistration = async () => {
    const registerData: RegisterUserRequest = {
      first_name: userData.firstName,
      last_name: userData.lastName,
      password: userData.password,
      mobile_number: userData.phone,
    };

    try {
      const registerResponse = await registerUser(registerData);
      console.log('User registered successfully:', registerResponse);
      Alert.alert('User Registration Succeed');
      navigation.navigate('Login');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error:', JSON.stringify(error));
      } else {
        console.error('An unknown error occurred');
      }
    }
  };

  const handleUserSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Input
            placeholder="First Name"
            leftIcon={{type: 'material', name: 'person'}}
            containerStyle={styles.inputContainer}
            value={userData.firstName}
            onChangeText={(text: string) =>
              handleValueChange('firstName', text)
            }
          />
          <Input
            placeholder="Last Name"
            leftIcon={{type: 'material', name: 'person-outline'}}
            containerStyle={styles.inputContainer}
            value={userData.lastName}
            onChangeText={(text: string) => handleValueChange('lastName', text)}
          />
          <Input
            placeholder="Mobile Number"
            leftIcon={{type: 'material', name: 'phone'}}
            containerStyle={styles.inputContainer}
            value={userData.phone}
            onChangeText={(text: string) => handleValueChange('phone', text)}
          />
          <Input
            placeholder="Password"
            leftIcon={{type: 'material', name: 'lock'}}
            secureTextEntry
            containerStyle={styles.inputContainer}
            value={userData.password}
            onChangeText={(text: string) => handleValueChange('password', text)}
          />

          <Button
            title="Register"
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.registerButton}
            titleStyle={styles.registerButtonTitle}
            onPress={handleUserRegistration}
          />

          <Button
            title="Sign In"
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.signInButton}
            titleStyle={styles.signInTitle}
            onPress={handleUserSignIn}
          />

          <View style={styles.orView}>
            <View style={styles.dividerLine} />
            <Text style={{fontSize: 18}}>Or</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialLoginContainer}>
            <SocialSignInButton name="facebook" />
            <SocialSignInButton name="google" />
            <SocialSignInButton name="apple" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
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
  signInButton: {
    backgroundColor: 'transparent',
  },
  signInTitle:{
    color: '#007bff',
  },
  socialLoginContainer: {
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  orView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'center',
  },
  dividerLine: {
    borderTopWidth: 1,
    width: '40%',
    borderTopColor: 'grey',
    marginHorizontal: 5,
  },
});

export default Registration;
