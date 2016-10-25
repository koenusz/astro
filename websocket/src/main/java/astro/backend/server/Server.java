package astro.backend.server;

import astro.backend.server.action.Action;
import astro.backend.server.action.ActionListener;
import astro.backend.server.action.ActionLog;
import astro.backend.server.action.ActionProducer;
import astro.backend.server.engine.Simulator;
import astro.backend.server.service.ShipService;
import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;
import com.google.inject.Guice;
import com.google.inject.Injector;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class Server implements ActionProducer{

    private static final Logger logger = LogManager.getLogger();

    static ShipService service;

    private List<ActionListener> listeners;

    final SocketIOServer server;


    public static void main(String[] args) throws InterruptedException {

        logger.info("starting server");

        Configuration config = new Configuration();
        config.setHostname("localhost");
        config.setPort(9092);

        Injector injector = Guice.createInjector();

        service = injector.getInstance(ShipService.class);

        new Server(config);

    }

    public Server(Configuration config) throws InterruptedException {

        server = new SocketIOServer(config);

        server.addConnectListener((client -> server.getBroadcastOperations().sendEvent("connect", "connecting to the server")));

        server.addEventListener("action", Action.class,
                (client, data, ackRequest) -> logger.info("Ship being requested"));

        server.addConnectListener(c -> logger.info("connecting"));


        server.addEventListener("action", Action.class,
                (client, data, ackRequest) -> {
                    Action action = service.getAction();
                    server.getBroadcastOperations().sendEvent("action", action );
                    logger.info("returning {}", action);
                }
        );

        ActionLog actionLog = new ActionLog();
        this.subscribe(actionLog);
        Simulator sim = new Simulator();
        subscribe(sim);

        server.start();

        Thread.sleep(Integer.MAX_VALUE);

        server.stop();
    }

    @Override
    public void subscribe(ActionListener listener) {
        if(listeners == null){
            listeners = new ArrayList<>();
        }
        listeners.add(listener);
        server.addEventListener("action", Action.class,(client, data, ackRequest) -> listener.listen(data));
    }

    @Override
    public void unSubscribe(ActionListener listener) {
        listeners.remove(listener);
    }

    @Override
    public void speak() {

    }
}
