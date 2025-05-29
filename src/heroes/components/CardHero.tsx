import { Link } from "react-router-dom";
import { motion } from "motion/react";
export interface Hero {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

interface Props {
  heroe: Hero;
}

export const CardHero = ({ heroe }: Props) => {
  const { superhero, id, first_appearance, alter_ego, characters, publisher } =
    heroe;

  const heroeImage = `/assets/${id}.jpg`;

  return (
    <Link to={`/hero/${id}`} className="card__heroe">
      <motion.img
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        src={heroeImage}
        alt={superhero}
      />
      <span>{publisher}</span>
      <small>{first_appearance}</small>
      <div className="card__heroe--info">
        <h2>{superhero}</h2>
        <p>{alter_ego}</p>
        {alter_ego !== characters && <p>{characters}</p>}
      </div>
    </Link>
  );
};
