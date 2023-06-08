export interface IWeatherResponse {
  longitude: number;
  latitude: number;
  weather: string;
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
