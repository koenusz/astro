package astro.backend.server.service;

import astro.backend.server.event.action.ActionEvent;
import astro.backend.server.event.action.ShipAction;
import astro.backend.server.model.Ship;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.inject.Singleton;

import java.io.File;
import java.io.IOException;

@Singleton
public class ShipService {


    ObjectMapper mapper = new ObjectMapper();

    Ship[] ships;

    int id = 0;

    public ShipService() {
        File file = new File(this.getClass().getResource("/ships.json").getFile());
        try {
            ships = mapper.readValue(file, Ship[].class);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public ActionEvent getAction(){
        int ship = new Double(Math.random() * 2.999).intValue();

        Ship proto = ships[ship];

        Ship newShip = new Ship(id, proto.getName());

        ActionEvent action = new ShipAction("SHIP_ADD_NAME", mapper.valueToTree(newShip));
        id++;
        return action;
    }
}
