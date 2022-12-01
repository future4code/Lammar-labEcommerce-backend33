import { Request, Response } from "express";
import connection from "../connection";
import { character } from "../type";

export default async function getAllCharacters(
  req: Request,
  res: Response
): Promise<void> {
  try {
    // const name = req.query;

    const characters: character[] = await connection("character");
    res.send(characters);
  } catch (error) {
    res.status(500).send("Unexpected server error");
  }
}
