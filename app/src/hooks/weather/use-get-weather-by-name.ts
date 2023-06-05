import { useState } from "react";
import { hookGetWeatherResponse } from "../../ts/types";
import { getWeatherByName } from "../../api/weather/get-weather-by-name";

interface IuseGetWeatherByNameResponse {
    loading: boolean
    data: hookGetWeatherResponse
    get: (name: string) => Promise<void>
    error: string | undefined
}

export function useGetWeatherByName(): IuseGetWeatherByNameResponse {

    const [data, setData] = useState<hookGetWeatherResponse>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | undefined>();

    async function get(name: string){
        try{
            const response = await getWeatherByName(name);
            setData(response.data);
        } catch (error){
            setError("Ocorreu um erro")
        }finally{
            setLoading(false);
        }
    }

    return { get, loading, data, error}
}