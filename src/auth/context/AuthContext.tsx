import { createContext } from "react";
import type { AuthContextProps } from "../types/types";

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
