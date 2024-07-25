import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import appleAuth, {
  AppleRequestOperation,
  AppleRequestScope,
} from '@invertase/react-native-apple-authentication';

const Registration = () => {
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

  return (
    <View style={styles.container}>
      <Input
        placeholder="First Name"
        leftIcon={{ type: 'material', name: 'person' }}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Last Name"
        leftIcon={{ type: 'material', name: 'person-outline' }}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Mobile Number"
        leftIcon={{ type: 'material', name: 'phone' }}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
        containerStyle={styles.inputContainer}
      />

      <Button
        title="Register"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.registerButton}
      />
      <View style={styles.socialLoginContainer}>
        <SocialIcon type="google" />
        <SocialIcon type="facebook" />
        {/* <SocialIcon type="apple" onPress={handleAppleLogin} /> */}
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
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default Registration;
