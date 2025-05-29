import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { CardHero } from "./CardHero";
import { motion } from "motion/react";

interface Props {
  publisher: "DC Comics" | "Marvel Comics";
}

export const HeroList = ({ publisher }: Props) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  const transition = {
    duration: 0.4,
    delay: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{opacity:1}}
      animate={{}}
      transition={transition}
      className="hero__list"
    >
      {heroes.map((heroe) => (
        <CardHero key={heroe.id} heroe={heroe} />
      ))}
    </motion.section>
  );
};
