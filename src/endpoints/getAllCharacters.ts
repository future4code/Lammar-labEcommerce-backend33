import { Request, Response } from "express";
import connection from "../connection";
import { character } from "../type";

export default async function getAllCharacters(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, orderBy, orderType, page } = req.query;

    const resultsPerPage = 5;

    const offset = resultsPerPage + (Number(page) - 1);

    debugger;

    const characters: character[] = await connection("character")
      .where("name", "LIKE", `%${name}%`)
      .orderBy((orderBy as string) || "name", orderType as string)
      .offset(offset);

    res.send(characters);
  } catch (error) {
    res.status(500).send("Unexpected server error");
  }
}
