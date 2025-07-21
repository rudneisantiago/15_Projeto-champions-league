import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

const database: ClubModel[] = [
  { id: 1, name: "Real Madrid" },
  { id: 2, name: "Paris Saint-Germain" },
  { id: 3, name: "Manchester City" },
  { id: 4, name: "Al Hilal" },
  { id: 5, name: "Liverpool" },
  { id: 6, name: "Bayern Munich" },
  { id: 7, name: "FC Barcelona" },
  { id: 8, name: "Al Nassr" },
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return database;
};

export const findClubById = async (
  id: number
): Promise<ClubModel | undefined> => {
  return database.find((club) => club.id === id);
};

export const insertClub = async (club: ClubModel) => {
  database.push(club);
  return club;
};

export const deleteOneClub = async (id: number) => {
  const index = database.findIndex((club) => club.id === id);

  if (index > -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyClub = async (id: number, name: string) => {
  const index = database.findIndex((club) => club.id === id);

  if (index > -1) {
    database[index].name = name;
  }

  return database[index];
};
