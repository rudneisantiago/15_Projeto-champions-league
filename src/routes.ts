import { Router } from "express";
import {
  getPlayer,
  getPlayerById,
  postPlayer,
  deletePlayer,
  updatePlayer,
} from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const routes = Router();

routes.get("/players", getPlayer);
routes.get("/players/:id", getPlayerById);
routes.post("/players", postPlayer);
routes.patch("/players/:id", updatePlayer);
routes.delete("/players/:id", deletePlayer);

routes.get("/clubs", getClubs);

export { routes };
