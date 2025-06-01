export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  logged: boolean;
  user?: User;
}

export interface AuthContextProps {
  authState: AuthState;
  login: (name: string) => void;
  logout: () => void;
}

export type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };
