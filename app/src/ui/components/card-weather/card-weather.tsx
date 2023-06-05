interface CardWeatherProps {
  longitude: number;
  latitude: number;
  description: string;
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

export function CardWeather({
  longitude,
  latitude,
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
    <div>
      <p>Longitude: {longitude}</p>
      <p>Latitude: {latitude}</p>
      <h3>Descrição: {description}</h3>
      <h3>Temperatura: {temperature}</h3>
      <p>Sensação térmica: {feelsLike}</p>
      <p>Temperatura Mínima: {temperatureMin}</p>
      <p>Temperatura Máxima: {temperatureMax}</p>
      <p>Pressão: {pressure}</p>
      <p>Umidade: {humidity}</p>
      <p>Velocidade do vento: {windSpeed}</p>
      <p>Nome: {name}</p>
      <p>País: {country}</p>

      <img src={`https://flagsapi.com/${country}/flat/64.png`} />
    </div>
  );
}
