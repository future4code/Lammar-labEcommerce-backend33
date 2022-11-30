"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const getAllCharacters_1 = __importDefault(require("./endpoints/getAllCharacters"));
const createCharacter_1 = __importDefault(require("./endpoints/createCharacter"));
app_1.default.get("/character", getAllCharacters_1.default);
app_1.default.put("/character", createCharacter_1.default);
//----------------------------------------------------------------------------------------
// const chalk = require("chalk"); Sem usar TS
/* import chalk from "chalk";

const message = chalk.green("Hello");

console.log(message);
 */
