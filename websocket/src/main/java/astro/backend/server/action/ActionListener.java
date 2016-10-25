package astro.backend.server.action;

@FunctionalInterface
public interface ActionListener {

    void listen(Action action);

}
