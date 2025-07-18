import { Router } from "express";
import {
  getPlayer,
  getPlayerById,
  postPlayer,
  deletePlayer,
  updatePlayer,
} from "./controllers/players-controller";

const routes = Router();

routes.get("/players", getPlayer);
routes.get("/players/:id", getPlayerById);

routes.post("/players", postPlayer);

routes.patch("/players/:id", updatePlayer);

routes.delete("/players/:id", deletePlayer);

export { routes };
