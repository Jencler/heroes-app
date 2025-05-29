import { Navigate, useParams } from "react-router-dom";
import { getHeroeByID } from "../helpers";
import { ScreenHeroe } from "../components/ScreenHeroe";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();

  const heroe = useMemo(() => getHeroeByID(id!), [id]);

  if (!heroe) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="heroe__page">
      <ScreenHeroe heroe={heroe} />
    </div>
  );
};
