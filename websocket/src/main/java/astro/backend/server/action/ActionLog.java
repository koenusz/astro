package astro.backend.server.action;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.collections4.queue.CircularFifoQueue;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Queue;

public class ActionLog implements ActionListener {

    private static final Logger logger = LogManager.getLogger();

    private ObjectMapper mapper = new ObjectMapper();


    private Queue<Action> log = new CircularFifoQueue<>(150);


    public void log(Action action){
        try {
            logger.info("action type: {} data {}", action.getType(), mapper.writeValueAsString(action.getShip()));
        } catch (JsonProcessingException e) {
            logger.error(e);
        }
        log.add(action);
    }

    @Override
    public void listen(Action action) {
        log(action);
    }
}
