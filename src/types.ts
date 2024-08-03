import { NavigationProp, RouteProp } from "@react-navigation/native";

export interface RegisterUserRequest {
  first_name: string;
  last_name: string;
  email?: string;
  password: string;
  mobile_number: string;
}

export interface RegisterUserResponse {
  id: number;
  name: string;
  email: string;
  mobile: string;
}

export interface LoginUserRequest {
  mobile: string;
  password: string;
}

export interface LoginUserResponse {
  message: string;
  token: string;
}

export type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};
