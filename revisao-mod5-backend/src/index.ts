import app from "./app";
import getAllCharacters from "./endpoints/getAllCharacters";
import createCharacter from "./endpoints/createCharacter";

app.get("/character", getAllCharacters);
app.put("/character", createCharacter);

//----------------------------------------------------------------------------------------
// const chalk = require("chalk"); Sem usar TS
/* import chalk from "chalk";

const message = chalk.green("Hello");

console.log(message);
 */
