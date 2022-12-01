"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
function createCharacter(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, gender, description } = req.body;
            // characters.push({
            //   id: Date.now(),
            //   name,
            //   gender,
            //   description,
            // });
            yield (0, connection_1.default)("character").insert({ name, gender, description });
            res.send(201).end();
        }
        catch (error) {
            res.status(500).end();
        }
    });
}
exports.default = createCharacter;
