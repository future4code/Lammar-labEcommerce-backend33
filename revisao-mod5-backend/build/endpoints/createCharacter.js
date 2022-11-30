"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
function createCharacter(req, res) {
    const { name, gender, description } = req.body;
    data_1.characters.push({
        id: Date.now(),
        name,
        gender,
        description,
    });
    res.send(201).end();
}
exports.default = createCharacter;
