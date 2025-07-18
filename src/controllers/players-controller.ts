import { Request, Response } from "express";
import {
  createPlayerService,
  getPlayerByIdService,
  getPlayerService,
  deletePlayerService,
  updatePlayerService,
} from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response) => {
  const { statusCode, body } = await getPlayerService();

  res.status(statusCode).send(body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { body, statusCode } = await getPlayerByIdService(id);

  res.status(statusCode).send(body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const { body: value } = req;
  const { body, statusCode } = await createPlayerService(value);

  res.status(statusCode).send(body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const requestBody: StatisticsModel = req.body;
  const id = Number(req.params.id);

  const { body, statusCode } = await updatePlayerService(id, requestBody);

  res.status(statusCode).send(body);
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { body, statusCode } = await deletePlayerService(id);

  res.status(statusCode).send(body);
};
