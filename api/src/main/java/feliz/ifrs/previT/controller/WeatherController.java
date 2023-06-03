package feliz.ifrs.previT.controller;

import feliz.ifrs.previT.domain.WeatherCity;
import feliz.ifrs.previT.service.GetWeatherCepService;
import feliz.ifrs.previT.service.GetWeatherNameCityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/weathers")
public class WeatherController {

    @Autowired
    private GetWeatherCepService getWeatherCepService;

    @Autowired
    private GetWeatherNameCityService getWeatherNameCityService;

    @GetMapping("/cep/{cep}")
    @ResponseStatus(HttpStatus.OK)
    public WeatherCity getByCep(@PathVariable String cep){
        return getWeatherCepService.get(cep);
    }

    @GetMapping("/name/{name}")
    @ResponseStatus(HttpStatus.OK)
    public WeatherCity getByName(@PathVariable String name){
        return getWeatherNameCityService.get(name);
    }
}
