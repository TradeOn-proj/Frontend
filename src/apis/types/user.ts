export interface postRegisterParams {
  username: string;
  email: string;
  password: string;
}

export interface registerResponse {
  msg: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface loginResponse {
  access_token: string;
  user: User;
}

export interface postLoginParams {
  username: string;
  password: string;
}
