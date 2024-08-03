import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store the token
export const storeToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('userToken', token);
    console.log('Token stored successfully');
  } catch (error) {
    console.error('Error storing the token:', error);
  }
};

// Function to retrieve the token
export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('Error retrieving the token:', error);
    return null;
  }
};

// Function to remove the token
export const removeToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('userToken');
    console.log('Token removed successfully');
  } catch (error) {
    console.error('Error removing the token:', error);
  }
};
