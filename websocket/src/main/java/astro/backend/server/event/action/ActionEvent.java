package astro.backend.server.event.action;

import astro.backend.server.event.frame.Event;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.Getter;

@Getter
public class ActionEvent extends Event {

    private final String actionType;

    private final JsonNode data;

    @JsonCreator
    protected ActionEvent(@JsonProperty("type") String actionType,@JsonProperty("data") JsonNode data) {
        this.actionType = actionType;
        this.data = data;
    }
}
