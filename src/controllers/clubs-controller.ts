import { Request, Response } from "express";
import {
  getClubsService,
  getClubByIdService,
  createClubService,
  deleteClubService,
  updateClubService,
} from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
  const { statusCode, body } = await getClubsService();
  res.status(statusCode).send(body);
};

export const getClubById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { statusCode, body } = await getClubByIdService(id);
  res.status(statusCode).send(body);
};

export const createClub = async (req: Request, res: Response) => {
  const { statusCode, body } = await createClubService(req.body);
  res.status(statusCode).send(body);
};

export const deleteClub = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { statusCode, body } = await deleteClubService(id);
  res.status(statusCode).send(body);
};

export const updateClub = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { statusCode, body } = await updateClubService(id, req.body.name);
  res.status(statusCode).send(body);
};
