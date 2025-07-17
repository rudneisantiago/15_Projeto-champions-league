import { Request, Response } from "express";
import {
  getPlayerByIdService,
  getPlayerService,
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
