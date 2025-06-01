import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const PublicRoutes = ({ children }: Props) => {
  const { authState } = useContext(AuthContext);
  const { logged } = authState;
  return logged ? <Navigate to="/marvel" /> : children;
};
