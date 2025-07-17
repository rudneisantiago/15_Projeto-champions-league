import { Request, Response } from "express";
import {
  createPlayerService,
  getPlayerByIdService,
  getPlayerService,
  deletePlayerService,
} from "../services/players-service";

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

export const deletePlayer = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { body, statusCode } = await deletePlayerService(id);

  res.status(statusCode).send(body);
};
