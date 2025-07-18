import { Router } from "express";
import {
  getPlayer,
  getPlayerById,
  postPlayer,
  deletePlayer,
  updatePlayer,
} from "./controllers/players-controller";

import {
  getClubs,
  getClubById,
  createClub,
  deleteClub,
  updateClub,
} from "./controllers/clubs-controller";

const routes = Router();

// Player routes
routes.get("/players", getPlayer);
routes.get("/players/:id", getPlayerById);
routes.post("/players", postPlayer);
routes.patch("/players/:id", updatePlayer);
routes.delete("/players/:id", deletePlayer);

// Club routes
routes.get("/clubs", getClubs);
routes.get("/clubs/:id", getClubById);
routes.post("/clubs", createClub);
routes.patch("/clubs/:id", updateClub);
routes.delete("/clubs/:id", deleteClub);

export { routes };
