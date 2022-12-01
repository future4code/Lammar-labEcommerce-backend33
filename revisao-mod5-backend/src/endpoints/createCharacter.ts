import { Request, Response } from "express";
import connection from "../connection";

export default async function createCharacter(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, gender, description } = req.body;

    // characters.push({
    //   id: Date.now(),
    //   name,
    //   gender,
    //   description,
    // });
    await connection("character").insert({ name, gender, description });

    res.send(201).end();
  } catch (error) {
    res.status(500).end();
  }
}
