import { Request, Response } from "express";

export const getPlayer = (req: Request, res: Response) => {
  res.type("json").send(["xupisco"]);
};
