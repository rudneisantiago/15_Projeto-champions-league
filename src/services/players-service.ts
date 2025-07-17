import { Request, Response } from "express";
import {
  findAllPlayers,
  findPlayerById,
} from "../repositories/player-repository";
import { ok, noContent } from "../utils/http-helper";

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
