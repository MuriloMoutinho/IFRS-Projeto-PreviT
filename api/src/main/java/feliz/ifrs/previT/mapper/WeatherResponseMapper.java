package feliz.ifrs.previT.mapper;

import feliz.ifrs.previT.controller.responses.WeatherResponse;
import feliz.ifrs.previT.domain.WeatherCity;
import lombok.experimental.UtilityClass;


@UtilityClass
public class WeatherResponseMapper {

    public static WeatherResponse toResponse(WeatherCity entity){
        return WeatherResponse
                .builder()
                .longitude(entity.getCoord().getLon())
                .latitude(entity.getCoord().getLat())
                .weather(entity.getWeather().get(0).getMain())
                .description(entity.getWeather().get(0).getDescription())
                .temperature(entity.getMain().getTemp())
                .feelsLike(entity.getMain().getFeels_like())
                .temperatureMin(entity.getMain().getTemp_min())
                .temperatureMax(entity.getMain().getTemp_max())
                .pressure(entity.getMain().getPressure())
                .humidity(entity.getMain().getHumidity())
                .windSpeed(entity.getWind().getSpeed())
                .name(entity.getName())
                .country(entity.getSys().getCountry())
                .build();
    }
}
