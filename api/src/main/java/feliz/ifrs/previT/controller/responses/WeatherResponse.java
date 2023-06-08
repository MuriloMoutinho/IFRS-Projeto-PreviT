package feliz.ifrs.previT.controller.responses;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WeatherResponse {

    private double longitude;
    private double latitude;
    private String weather;
    private String description;
    private double temperature;
    private double feelsLike;
    private double temperatureMin;
    private double temperatureMax;
    private double pressure;
    private double humidity;
    private double windSpeed;
    private String name;
    private String country;

}

