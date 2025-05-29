import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", {
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
