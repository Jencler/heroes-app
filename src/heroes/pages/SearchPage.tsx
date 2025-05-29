import type { FormEvent } from "react";
import { useForm } from "../hooks";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { CardHero } from "../components";
import { motion } from "motion/react";

export const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(`${q}`);

  const { formState, handleInputChange } = useForm({
    initialForm: {
      heroe: `${q}`,
    },
  });

  const onSumbit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = formState.heroe.trim();
    if (trimmed === "") return;
    navigate(`/search?q=${trimmed}`);
  };

  const transition = {
    duration: 0.8,
    delay: 0.4,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <div>
      <section className="input__search--container">
        <form onSubmit={onSumbit} className="form">
          <label htmlFor="heroe" className="label__form">
            <span>Busca tu superhéroe </span>
            <input
              className="input__search"
              type="text"
              placeholder="Iron man, Batman, Thor, ..."
              required
              autoComplete="off"
              name="heroe"
              value={formState.heroe}
              onChange={handleInputChange}
            />
          </label>
        </form>
      </section>
      {q === ""
        ? ""
        : heroes.length === 0 && (
            <section className="notfound__hero">
              <p>
                No existe heroes con <strong>{q}</strong>
              </p>
            </section>
          )}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{}}
        transition={transition}
        className="results__heroes"
      >
        {heroes.map((heroe) => (
          <CardHero key={heroe.id} heroe={heroe} />
        ))}
      </motion.section>
    </div>
  );
};
