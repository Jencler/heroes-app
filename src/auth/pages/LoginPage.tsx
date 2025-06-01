import { LogIn } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const lasPath = localStorage.getItem("lastPath") || "/";

  const handleLogin = () => {
    login("jencler");

    navigate(lasPath, {
      replace: true,
    });
  };

  return (
    <section className="page__login">
      <title>Iniciar sesión | Heroes App</title>
      <button className="btn__auth" onClick={handleLogin}>
        <LogIn color="#2e2e2e" size={18} />
        Iniciar sesión
      </button>
    </section>
  );
};
