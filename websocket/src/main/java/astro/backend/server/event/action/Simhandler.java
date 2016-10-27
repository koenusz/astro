package astro.backend.server.event.action;

import astro.backend.server.engine.Simulator;
import astro.backend.server.event.frame.Handler;

public class Simhandler extends Handler {
    protected Simulator simulator;
    public Simhandler(Simulator simulator) {
        this.simulator = simulator;
    }
}