package feliz.ifrs.previT.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import feliz.ifrs.previT.domain.weatherCore.*;
import lombok.*;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@JsonIgnoreProperties(ignoreUnknown = true)
public class WeatherCity {
    private Coord coord;
    private List<Weather> weather;
    private Main main;
    private Wind wind;
    private String name;
    private Sys sys;

}

