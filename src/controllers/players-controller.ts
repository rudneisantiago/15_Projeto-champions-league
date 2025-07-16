import { Request, Response } from "express";
import { getPlayerService } from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
  const { statusCode, body } = await getPlayerService();

  res.status(statusCode).send(body);
};
