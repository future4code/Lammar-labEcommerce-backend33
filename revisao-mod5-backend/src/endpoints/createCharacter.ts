import { characters } from "../data";
import { Request, Response } from "express";

export default function createCharacter(req: Request, res: Response): void {
  const { name, gender, description } = req.body;

  characters.push({
    id: Date.now(),
    name,
    gender,
    description,
  });

  res.send(201).end();
}
