package astro.backend.server.action;


import com.fasterxml.jackson.databind.JsonNode;
import lombok.Data;

@Data
public class Action {

    private String type;

    private JsonNode ship;

}
