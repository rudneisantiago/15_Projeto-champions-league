import {
  findAllClubs,
  findClubById,
  insertClub,
  deleteOneClub,
  findAndModifyClub,
} from "../repositories/club-repository";
import { ok, created, noContent, badRequest } from "../utils/http-helper";

export const getClubsService = async () => {
  const data = await findAllClubs();
  return await ok(data);
};

export const getClubByIdService = async (id: number) => {
  const club = await findClubById(id);

  if (club) {
    return await ok(club);
  }

  return await noContent();
};

export const createClubService = async (club: { id: number; name: string }) => {
  const newClub = await insertClub(club);
  return await created();
};

export const deleteClubService = async (id: number) => {
  const success = await deleteOneClub(id);

  if (success) {
    return await ok({ message: "Club deleted" });
  }

  return await badRequest();
};

export const updateClubService = async (id: number, name: string) => {
  const updatedClub = await findAndModifyClub(id, name);

  if (updatedClub) {
    return await ok(updatedClub);
  }

  return await noContent();
};
