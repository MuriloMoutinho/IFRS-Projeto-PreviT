import { ReactNode } from "react";
import { OBJECT_NOT_EMPTY_FORM } from "../../../constants/object-form";
import { useForm } from "../../../hooks/use-form.hook";
import { useGetWeather } from "../../../hooks/weather/use-get-weather";
import {
  Input,
  InputWrapper,
  Button,
  CardWeather,
  LoadingMessage,
  ErrorMessage,
} from "../../components";

export function HomeScreen() {
  const getWeather = useGetWeather();

  const innitialData = {
    term: { ...OBJECT_NOT_EMPTY_FORM },
  };
  const { handleSubmit, onChangeData, formData } = useForm(
    innitialData,
    submit
  );

  async function submit(): Promise<void> {
    await getWeather.get(formData.term.value);
  }

  function renderCardWeather(): ReactNode {
    if (getWeather.loading)
      return <LoadingMessage>Carregando clima</LoadingMessage>;
    if (getWeather.error)
      return <ErrorMessage>{getWeather.error}</ErrorMessage>;

    if (!getWeather.data)
      return <ErrorMessage>"Ocorreu um erro ao obter o clima"</ErrorMessage>;

    return (
      <CardWeather
        longitude={getWeather.data.longitude}
        latitude={getWeather.data.latitude}
        description={getWeather.data.weather}
        temperature={getWeather.data.temperature}
        feelsLike={getWeather.data.feelsLike}
        temperatureMin={getWeather.data.temperatureMin}
        temperatureMax={getWeather.data.temperatureMax}
        pressure={getWeather.data.pressure}
        humidity={getWeather.data.humidity}
        windSpeed={getWeather.data.windSpeed}
        name={getWeather.data.name}
        country={getWeather.data.country}
      />
    );
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
        </InputWrapper>

        <Button>Enviar</Button>
      </form>

      {renderCardWeather()}
    </main>
  );
}
