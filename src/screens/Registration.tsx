import React, {useState} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import appleAuth, {
  AppleRequestOperation,
  AppleRequestScope,
} from '@invertase/react-native-apple-authentication';

import SocialSignInButton from '../components/SocialSignInButton';

const Registration = () => {
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

  return (
    <View style={styles.container}>
      <Input
        placeholder="First Name"
        leftIcon={{type: 'material', name: 'person'}}
        containerStyle={styles.inputContainer}
        value={userData.firstName}
        onChangeText={(text: string) => handleValueChange('firstName', text)}
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
  );
};

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
