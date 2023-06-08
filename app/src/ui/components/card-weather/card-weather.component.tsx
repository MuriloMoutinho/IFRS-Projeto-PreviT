import * as S from "./card-weather.styles";
import { GpsIcon, SunIcon, RainIcon, CloudSIcon } from "../../../assets";
import { TypesWeather } from "../../../constants";

interface CardWeatherProps {
  longitude: number;
  latitude: number;
  description: string;
  weather: string;
  temperature: number;
  feelsLike: number;
  temperatureMin: number;
  temperatureMax: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  name: string;
  country: string;
}

function renderWeatherIcon(typeWeather: string) {
  if (typeWeather == TypesWeather.CLEAR)
    return <img src={SunIcon} alt="icone clima limpo" />;
  if (typeWeather == TypesWeather.CLOUDS)
    return <img src={CloudSIcon} alt="icone clima nublado" />;
  if (typeWeather == TypesWeather.RAIN)
    return <img src={RainIcon} alt="icone clima chuvoso" />;
}

export function CardWeather({
  longitude,
  latitude,
  weather,
  description,
  temperature,
  feelsLike,
  temperatureMin,
  temperatureMax,
  pressure,
  humidity,
  windSpeed,
  name,
  country,
}: CardWeatherProps): JSX.Element {
  return (
    <S.CardWeatherStyle>
      <S.LocalInfosStyle>
        <img src={GpsIcon} alt="icone gps" />
        {name}
        <img
          src={`https://flagsapi.com/${country}/flat/64.png`}
          alt="bandeira do pais"
        />
      </S.LocalInfosStyle>

      <S.MainInformations>
        <ul>
          <li>Longitude: {longitude}</li>
          <li>Latitude: {latitude}</li>
          <li>Sensação térmica: {feelsLike}</li>
          <li>Temperatura Mínima: {temperatureMin}</li>
          <li>Temperatura Máxima: {temperatureMax}</li>
        </ul>

        <S.TemperatureStyle>
          {renderWeatherIcon(weather)}
          <p>{temperature} ºC</p>
          <p>{description}</p>
        </S.TemperatureStyle>
      </S.MainInformations>

      <S.DetailsWeatherStyle>
        <div>
          <p>Pressão:</p>
          <p> {pressure}</p>
        </div>
        <div>
          <p>Umidade:</p>
          <p> {humidity}</p>
        </div>
        <div>
          <p>
            Velocidade <br />
            do vento:
          </p>
          <p> {windSpeed}</p>
        </div>
      </S.DetailsWeatherStyle>
    </S.CardWeatherStyle>
  );
}
