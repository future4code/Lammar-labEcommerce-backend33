import app from "./app";
import getAllCharacters from "./endpoints/getAllCharacters";
import createCharacter from "./endpoints/createCharacter";
import deleteCharacter from "./endpoints/deleteCharacter";

app.get("/character", getAllCharacters);
app.put("/character", createCharacter);
app.delete("/character/:id", deleteCharacter);

//----------------------------------------------------------------------------------------
// const chalk = require("chalk"); Sem usar TS
/* import chalk from "chalk";

const message = chalk.green("Hello");

console.log(message);
 */
