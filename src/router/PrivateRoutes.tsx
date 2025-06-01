import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const PrivateRoutes = ({ children }: Props) => {
  const { authState } = useContext(AuthContext);
  const { logged } = authState;

  const { pathname, search } = useLocation();

  const lastPath = pathname + search;

  window.localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
