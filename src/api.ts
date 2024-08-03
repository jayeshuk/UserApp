import axios from 'axios';
import {
  RegisterUserRequest,
  RegisterUserResponse,
  LoginUserRequest,
  LoginUserResponse,
} from './types';

const API_BASE_URL = 'http://192.168.29.215:3000/api/v1'; // Update this with your actual base URL i.e. Your IP

export const registerUser = async (
  data: RegisterUserRequest,
): Promise<RegisterUserResponse> => {
  try {
    const response = await axios.post<RegisterUserResponse>(
      `${API_BASE_URL}/register`,
      data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Registration failed');
    } else {
      throw new Error('An unknown error occurred during registration');
    }
  }
};

export const loginUser = async (
  data: LoginUserRequest,
): Promise<LoginUserResponse> => {
  try {
    const response = await axios.post<LoginUserResponse>(
      `${API_BASE_URL}/login`,
      data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Login failed');
    } else {
      throw new Error('An unknown error occurred during login');
    }
  }
};
