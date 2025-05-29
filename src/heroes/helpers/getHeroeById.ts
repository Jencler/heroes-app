import { heroes } from "../data/heroes";

export const getHeroeByID = (id: string) => {
  return heroes.find((hero) => hero.id === id);
};
