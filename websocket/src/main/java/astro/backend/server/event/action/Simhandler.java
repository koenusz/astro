package astro.backend.server.event.action;

import astro.backend.server.engine.Simulator;
import astro.backend.server.event.frame.Event;
import astro.backend.server.event.frame.Handler;

public class Simhandler implements Handler {
    protected Simulator simulator;
    public Simhandler(Simulator simulator) {
        this.simulator = simulator;
    }

    @Override
    public void onEvent(Event event) {

    }
}