import { useState } from "react";
import { eventFunction } from "../ts/types";
import { eventForm } from "../ts/types";

interface IuseFormResponse {
  onChangeData: (event: eventFunction) => void;
  handleSubmit: (event: eventForm) => void;
  formData: Record<string, any>;
}

export function useForm(
  initialData: Record<string, any>,
  onSubmit: () => any
): IuseFormResponse {
  const [formData, setFormData] = useState(initialData);

  function onChangeData(event: eventFunction): void {
    const { name, value } = event.target;

    setFormData((oldFormData) => ({
      ...oldFormData,
      [name]: { ...oldFormData[name], value: value },
    }));
  }

  function setError(inputName: string, message: string): void {
    setFormData((oldFormData) => ({
      ...oldFormData,
      [inputName]: { ...oldFormData[inputName], error: message },
    }));
  }

  function handleSubmit(event: eventForm): void {
    event.preventDefault();

    const isFormError = Object.keys(formData).filter((key) => {
      const data = formData[key];
      if (data.validate) {
        const inputError = data.validate(data.value);
        setError(key, inputError);
        return !!inputError;
      }
    });

    if (isFormError.length === 0) onSubmit();
  }

  return {
    onChangeData,
    handleSubmit,
    formData,
  };
}
