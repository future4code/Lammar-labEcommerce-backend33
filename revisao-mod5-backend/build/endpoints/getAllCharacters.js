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
function getAllCharacters(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, orderBy, orderType, page } = req.query;
            const resultsPerPage = 5;
            const offset = resultsPerPage + (Number(page) - 1);
            debugger;
            const characters = yield (0, connection_1.default)("character")
                .where("name", "LIKE", `%${name}%`)
                .orderBy(orderBy || "name", orderType)
                .offset(offset);
            res.send(characters);
        }
        catch (error) {
            res.status(500).send("Unexpected server error");
        }
    });
}
exports.default = getAllCharacters;
