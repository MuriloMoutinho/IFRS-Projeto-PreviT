package feliz.ifrs.previT.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import feliz.ifrs.previT.controller.responses.WeatherResponse;
import feliz.ifrs.previT.domain.WeatherCity;
import feliz.ifrs.previT.mapper.WeatherResponseMapper;
import feliz.ifrs.previT.util.KeyEncryption;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.ResourceAccessException;
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

    public WeatherResponse get(String name) {

        String keyDecript = KeyEncryption.decrypt(keyOpenWeather);

        String weatherUrl = apiWeatherUrl + "q=" +
                name + "&units=metric&appid=" +
                keyDecript + "&lang=" + langApp;

        try {
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(weatherUrl, String.class);

            try {
                ObjectMapper objectMapper = new ObjectMapper();
                WeatherCity weatherCity = objectMapper.readValue(response.getBody(), WeatherCity.class);
                return WeatherResponseMapper.toResponse(weatherCity);

            } catch (IOException e) {
                throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Erro ao converter JSON");
            }
        }catch (HttpClientErrorException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cidade não encontrada!");
        } catch (HttpServerErrorException | ResourceAccessException e){
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Api fora do ar!");
        }

    }
}
