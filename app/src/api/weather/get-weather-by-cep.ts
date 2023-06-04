import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants";
import { AxiosResponse } from "axios";
import { IWeatherResponse } from "../../ts/interfaces";

export async function getWeatherByCep(
  cep: number
): Promise<AxiosResponse<IWeatherResponse>> {
  return await axiosInstance.get(
    API_PATH.BASE + API_PATH.GET_WEATHER_BY_CEP + cep
  );
}
