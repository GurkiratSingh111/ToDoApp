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
exports.deleteToDo = exports.updateToDo = exports.saveToDo = exports.getToDo = void 0;
const ToDoModel_1 = __importDefault(require("../models/ToDoModel"));
const getToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const toDo = yield ToDoModel_1.default.find({});
    return res.json(toDo);
});
exports.getToDo = getToDo;
const saveToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    ToDoModel_1.default.create({ title, description }).then((data) => {
        console.log("Added Successfully");
        console.log(data);
        res.json(data);
    });
});
exports.saveToDo = saveToDo;
const updateToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id, title, description } = req.body;
    ToDoModel_1.default.findByIdAndUpdate(_id, { title, description })
        .then(() => res.status(201).send("Updated Successfully..."))
        .catch((err) => res.status(500).send("Error Occurred..."));
});
exports.updateToDo = updateToDo;
const deleteToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body;
    ToDoModel_1.default.findByIdAndDelete(_id)
        .then(() => res.status(201).send("Deleted Successfully..."))
        .catch((err) => res.status(500).send("Error Occured..."));
});
exports.deleteToDo = deleteToDo;
