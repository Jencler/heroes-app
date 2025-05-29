import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { CardHero } from "./CardHero";

interface Props {
  publisher: "DC Comics" | "Marvel Comics";
}

export const HeroList = ({ publisher }: Props) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <section className="hero__list">
      {heroes.map((heroe) => (
        <CardHero key={heroe.id} heroe={heroe} />
      ))}
    </section>
  );
};
