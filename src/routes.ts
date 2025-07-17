import { Router } from "express";
import { getPlayer, getPlayerById } from "./controllers/players-controller";

const routes = Router();

routes.get("/players", getPlayer);
routes.get("/players/:id", getPlayerById);

export { routes };
