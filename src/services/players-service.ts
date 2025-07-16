import { findAllPlayers } from "../repositories/player-repository";
import { ok, noContent } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await findAllPlayers();

  if (data) {
    return await ok(data);
  }

  return await noContent();
};
