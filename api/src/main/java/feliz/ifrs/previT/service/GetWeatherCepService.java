package feliz.ifrs.previT.service;

import feliz.ifrs.previT.controller.responses.WeatherResponse;
import feliz.ifrs.previT.domain.Cep;
import feliz.ifrs.previT.domain.WeatherCity;
import feliz.ifrs.previT.service.Core.GetCepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GetWeatherCepService {

    @Autowired
    private GetCepService getCepService;

    @Autowired
    private GetWeatherNameCityService getWeatherNameCityService;

    public WeatherResponse get(String cep) {
       Cep cepEntity = getCepService.get(cep);

        return getWeatherNameCityService.get(cepEntity.getLocalidade());
    }
}
