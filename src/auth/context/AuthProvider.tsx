import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

interface Props {
  children: React.ReactNode;
}

const initialState = {
  logged: false,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user")!);

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name: string = "") => {
    const user = { name, id: "ABC", email: `${name}@gmail.com` };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
