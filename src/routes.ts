import { Router } from "express";
import {
  getPlayer,
  getPlayerById,
  postPlayer,
} from "./controllers/players-controller";

const routes = Router();

routes.get("/players", getPlayer);
routes.get("/players/:id", getPlayerById);

routes.post("/players", postPlayer);

export { routes };
