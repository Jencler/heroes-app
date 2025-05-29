import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: string) => {
  if (!publisher) return [];
  return heroes.filter((hero) => hero.publisher === publisher);
};
