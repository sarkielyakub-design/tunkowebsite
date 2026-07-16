export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}