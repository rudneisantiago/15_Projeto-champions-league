import { findAllClubs } from "../repositories/club-repository";
import { ok } from "../utils/http-helper";

export const getClubsService = async () => {
  const data = await findAllClubs();
  return await ok(data);
};
