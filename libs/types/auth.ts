export enum EAuthentication {
  LOGIN = 'Login',
  REGISTER = 'Create Account',
}

export type TLoginRequest = {
  email: string;
  password: string;
};

export type TRegistrationRequest = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
};

export type TUser = {
  email: string;
  first_name: string;
  id: string;
  image: string;
  last_name: string;
};

export enum ESocialAuth {
  GOOGLE = 'google',
  APPLE = 'apple',
}
