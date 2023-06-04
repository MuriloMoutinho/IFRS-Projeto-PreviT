import { useState } from "react";

interface inputsUseForm {
  initialData: Record<string, any>,
  onSubmit: () => void 
}
type eventType = React.ChangeEvent<HTMLInputElement>


export function useForm({ initialData, onSubmit }: inputsUseForm) {
  const [formData, setFormData] = useState(initialData);

  function onChangeData(event: eventType): void {
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

  function handleSubmit(event: eventType): void  {
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
