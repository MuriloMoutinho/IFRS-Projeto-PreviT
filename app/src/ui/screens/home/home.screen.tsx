import { ReactNode } from "react";
import { OBJECT_NOT_EMPTY_FORM } from "../../../constants/object-form";
import { useForm, useGetWeather } from "../../../hooks";
import * as S from "./home.styles";
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
    if (!getWeather.call) return;

    if (getWeather.loading) return <LoadingMessage />;

    if (getWeather.error)
      return <ErrorMessage>{getWeather.error}</ErrorMessage>;

    if (!getWeather.data)
      return <ErrorMessage>"Ocorreu um erro ao obter o clima"</ErrorMessage>;
    return (
      <CardWeather
        longitude={getWeather.data.longitude}
        latitude={getWeather.data.latitude}
        description={getWeather.data.description}
        weather={getWeather.data.weather}
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
    <S.BackgroundStyle>
      <S.MainStyle>
        <h1>PreviT</h1>
        <S.FormStyle onSubmit={handleSubmit}>
          <div>
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
          </div>
        </S.FormStyle>

        {renderCardWeather()}
      </S.MainStyle>
    </S.BackgroundStyle>
  );
}
