package astro.backend.server.model;

import lombok.Getter;

@Getter
public class Ship {



    private long id;

    private String name;

    public Ship(){};

    public Ship(long id, String name) {
        this.id = id;
        this.name = name;
    }
}
