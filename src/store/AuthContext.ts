import { createContext } from "react";

export interface User {
  name?: string;
  email?: string;
  token?: string;
}

export interface AuthContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
