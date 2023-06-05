import { useState } from "react";
import { hookGetWeatherResponse } from "../../ts/types";
import { getWeatherByName } from "../../api/weather/get-weather-by-name";
import { hasLetters } from "../../helpers";
import { getWeatherByCep } from "../../api/weather/get-weather-by-cep";
import { AxiosResponse } from "axios";
import { IWeatherResponse } from "../../ts/interfaces";

interface IuseGetWeatherResponse {
  loading: boolean;
  data: hookGetWeatherResponse;
  get: (name: string) => Promise<void>;
  error: string | undefined;
}

export function useGetWeather(): IuseGetWeatherResponse {
  const [data, setData] = useState<hookGetWeatherResponse>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  async function get(term: string): Promise<void> {
    try {
      let response: AxiosResponse<IWeatherResponse>;

      hasLetters(term)
        ? (response = await getWeatherByName(term))
        : (response = await getWeatherByCep(Number(term)));

      setError(undefined);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError("Ocorreu um erro");
    } finally {
      setLoading(false);
    }
  }

  return { get, loading, data, error };
}
