import { Request, Response } from "express";
import connection from "../connection";

export default async function deleteCharacter(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params; /* as { id: string} */

    //   const index: number = characters.findIndex(
    //     (character) => character.id === Number(id)
    //   );

    //   if (index > -1) characters.splice(index, 1);

    await connection("character").delete().where({ id });

    res.status(200).end();
  } catch (error) {
    res.status(500).end();
  }
}
