import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import GoogleIcon from '../assets/icons/google.svg';
import FacebookIcon from '../assets/icons/facebook.svg';
import AppleIcon from '../assets/icons/apple.svg';

type SocialIconType = {
  [key: string]: {
    icon: React.ReactNode;
    backgroundColor: string;
    fontColor: string;
  };
};

const signInIcons: SocialIconType = {
  apple: {
    icon: <AppleIcon width={36} height={36} />,
    backgroundColor: '#000000',
    fontColor: '#fff',
  },
  google: {
    icon: <GoogleIcon width={36} height={36} />,
    backgroundColor: '#ffffff',
    fontColor: 'grey',
  },
  facebook: {
    icon: <FacebookIcon width={36} height={36} />,
    backgroundColor: '#039BE5',
    fontColor: '#fff',
  },
};

export default function SocialSignInButton({name}: {name: string}) {
  return (
    <TouchableOpacity style={styles(name).button}>
      {signInIcons[name].icon}
      <Text style={styles(name).signInText}>
        Sign in with <Text style={styles(name).brandName}>{name}</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = (name: string) =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
      paddingLeft: '12.5%',
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal: 10,
      backgroundColor: signInIcons[name].backgroundColor,
    },
    signInText: {
      fontWeight: '500',
      fontSize: 18,
      marginLeft: 20,
      color: signInIcons[name].fontColor,
    },
    brandName: {textTransform: 'capitalize'},
  });
