package feliz.ifrs.previT.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import feliz.ifrs.previT.domain.WeatherCity;
import feliz.ifrs.previT.util.KeyEncryption;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;

@Service
public class GetWeatherNameCityService {

    @Value("${values.api.weather.url}")
    private String apiWeatherUrl;

    @Value("${values.key.openWeather}")
    private String keyOpenWeather;

    @Value("${values.lang}")
    private String langApp;

    public WeatherCity get(String name) {

        String keyDecript = KeyEncryption.decrypt(keyOpenWeather);

        String weatherUrl = apiWeatherUrl + "q=" +
                name + "&units=metric&appid=" +
                keyDecript + "&lang=" + langApp;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(weatherUrl, String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            ObjectMapper objectMapper = new ObjectMapper();

            try{
                return objectMapper.readValue(response.getBody(), WeatherCity.class);
            } catch (IOException e){
                throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Erro ao converter JSON");
            }

        } else {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Api fora do ar");
        }

    }
}
