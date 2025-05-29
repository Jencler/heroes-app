import { useState, type ChangeEvent } from "react";

interface Props {
  initialForm: {
    heroe: string;
  };
}

export const useForm = ({ initialForm = { heroe: "" } }: Props) => {
  const [formState, setFormState] = useState(initialForm);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleInputReset = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    handleInputChange,
    handleInputReset,
  };
};
