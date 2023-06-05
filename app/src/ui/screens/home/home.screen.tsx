import { useState } from "react";
import { OBJECT_NOT_EMPTY_FORM } from "../../../constants/object-form";
import { hasLetters } from "../../../helpers";
import { useForm } from "../../../hooks/use-form.hook";
import { useGetWeatherByCep } from "../../../hooks/weather/use-get-weather-by-cep";
import { useGetWeatherByName } from "../../../hooks/weather/use-get-weather-by-name";
import { Input, InputWrapper, Button } from "../../components";
import { hookGetWeatherResponse } from "../../../ts/types";

export function HomeScreen() {
  const getWeatherName = useGetWeatherByName();
  const getWeatherCep = useGetWeatherByCep();
  const [weatherFinal, setWeatherFinal] = useState<hookGetWeatherResponse>(undefined);

  const innitialData = {
    term: { ...OBJECT_NOT_EMPTY_FORM },
  };
  const { handleSubmit, onChangeData, formData } = useForm(
    innitialData,
    submit
  );

  async function submit(): Promise<void> {
    if(hasLetters(formData.term.value)){
      await getWeatherName.get(formData.term.value)
      setWeatherFinal(getWeatherName.data)
    }else {
      await getWeatherCep.get(Number(formData.term.value));
      setWeatherFinal(getWeatherCep.data)
    }
  }

  return (
    <main>
      <h1>PreviT</h1>
      <form onSubmit={handleSubmit}>
        <InputWrapper
          textLabel="Insira o nome ou o CEP da sua cidade:"
          error={formData.term.error}
        >
          <Input
            type="text"
            name="term"
            onChange={onChangeData}
            value={formData.term.value}
          ></Input>
          <Button>Enviar</Button>
        </InputWrapper>
      </form>
    </main>
  );
}
