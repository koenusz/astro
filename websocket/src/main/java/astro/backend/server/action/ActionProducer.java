package astro.backend.server.action;

public interface ActionProducer {

    void subscribe(ActionListener listener);

    void unSubscribe(ActionListener listener);

    void speak();
}
