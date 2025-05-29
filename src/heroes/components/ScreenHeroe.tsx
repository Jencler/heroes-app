import { ArrowLeft } from "lucide-react";
import type { Hero } from "./CardHero";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react"

interface Props {
  heroe: Hero;
}

export const ScreenHeroe = ({ heroe }: Props) => {
  const { id, alter_ego, characters, first_appearance, publisher, superhero } =
    heroe;

  const heroeImage = `/assets/${id}.jpg`;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="heroe__containe--screen">
      <div className="heroe__container--img">
        <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} src={heroeImage} alt={superhero} />
      </div>
      <div className="heroe__container--info">
        <h2>{superhero}</h2>
        <p>{alter_ego}</p>
        <p>{first_appearance}</p>
        {alter_ego !== characters && <p>{characters}</p>}
        <br />
        <div>
          {publisher === "Marvel Comics" ? (
            <img src="/marvel.png" width={100} alt="Marvel heroe" />
          ) : (
            <img src="/dc.svg" width={100} alt="DC heroe" />
          )}
        </div>
        <br />

        <button onClick={handleBack} className="btn__auth">
          <ArrowLeft size={18} /> Regresar
        </button>
      </div>
    </section>
  );
};
