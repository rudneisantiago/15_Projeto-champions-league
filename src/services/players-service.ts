import {
  deleteOnePlayer,
  findAllPlayers,
  findPlayerById,
  insertPlayer,
} from "../repositories/player-repository";
import { ok, noContent, badRequest, created } from "../utils/http-helper";
import { PlayerModel } from "../models/player-model";

export const getPlayerService = async () => {
  const data = await findAllPlayers();

  if (data) {
    return await ok(data);
  }

  return await noContent();
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);

  if (data) {
    return await ok(data);
  }

  return await noContent();
};

export const createPlayerService = async (player: PlayerModel) => {
  if (Object.keys(player).length === 0) {
    return await badRequest();
  }

  await insertPlayer(player);
  return await created();
};

export const deletePlayerService = async (id: number) => {
  await deleteOnePlayer(id);

  return ok({ message: "Player deleted" });
};
