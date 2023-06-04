import { useState } from "react";
import { getWeatherByCep } from "../../api/weather/get-weather-by-cep";
import { hookGetWeatherResponse } from "../../ts/types";

interface IuseGetWeatherByCep {
    loading: boolean
    data: hookGetWeatherResponse
    get: (cep: number) => Promise<void>
    error: string | undefined
}

export function useGetWeatherByCep(): IuseGetWeatherByCep {

    const [data, setData] = useState<hookGetWeatherResponse>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | undefined>();

    async function get(cep: number){
        try{
            const response = await getWeatherByCep(cep);
            setData(response.data);
        } catch (error){
            setError("Ocorreu um erro")
        }finally{
            setLoading(false);
        }
    }

    return { get, loading, data, error}
}