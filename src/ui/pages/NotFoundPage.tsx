import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="page__login">
      <title>Página no encontrada | Heroes App</title>
      <button className="btn__auth" onClick={handleBack}>
        Regresar al inicio
      </button>
    </div>
  );
};
