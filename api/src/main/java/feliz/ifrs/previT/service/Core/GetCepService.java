package feliz.ifrs.previT.service.Core;

import com.fasterxml.jackson.databind.ObjectMapper;
import feliz.ifrs.previT.domain.Cep;
import feliz.ifrs.previT.domain.WeatherCity;
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
import java.net.UnknownHostException;

@Service
public class GetCepService {

    @Value("${values.api.cep.url}")
    private String apiCepUrl;

    public Cep get(String cep) {
        String cepApi = apiCepUrl + cep + "/json";

        try{
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(cepApi, String.class);

            try{
                ObjectMapper objectMapper = new ObjectMapper();
                return objectMapper.readValue(response.getBody(), Cep.class);

            } catch (IOException e){
                throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Erro ao converter JSON");
            }
        } catch (HttpClientErrorException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cep não encontrado!");
        }catch (HttpServerErrorException | ResourceAccessException e){
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Api fora do ar!");
        }



    }
}
