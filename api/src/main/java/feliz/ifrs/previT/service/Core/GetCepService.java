package feliz.ifrs.previT.service.Core;

import com.fasterxml.jackson.databind.ObjectMapper;
import feliz.ifrs.previT.domain.Cep;
import feliz.ifrs.previT.domain.WeatherCity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;

@Service
public class GetCepService {

    @Value("${values.api.cep.url}")
    private String apiCepUrl;

    public Cep get(String cep) {
        String cepApi = apiCepUrl + cep + "/json";

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(cepApi, String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            ObjectMapper objectMapper = new ObjectMapper();

            try{
                return objectMapper.readValue(response.getBody(), Cep.class);
            } catch (IOException e){
                throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Erro ao converter JSON");
            }

        } else {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Api fora do ar");
        }

    }
}
