import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants";
import { IWeatherResponse } from "../../ts/interfaces";
import { AxiosResponse } from "axios";

export async function getWeatherByName(
  name: string
): Promise<AxiosResponse<IWeatherResponse>> {
  return await axiosInstance.get(
    API_PATH.BASE + API_PATH.GET_WEATHER_BY_NAME + name
  );
}
