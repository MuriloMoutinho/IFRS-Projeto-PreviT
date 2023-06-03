package feliz.ifrs.previT.domain.weatherCore;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Wind {
    private double speed;
    private int deg;
    private double gust;
}
