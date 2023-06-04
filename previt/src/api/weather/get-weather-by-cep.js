import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants";

export async function getWeatherByCep(cep){
    return await axiosInstance.get(API_PATH.BASE + API_PATH.GET_WEATHER_BY_CEP + cep);
}