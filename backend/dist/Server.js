"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const ToDoRoute_1 = __importDefault(require("./routes/ToDoRoute"));
require("dotenv").config();
const app = (0, express_1.default)();
const PORT = process.env.port || 3010;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(ToDoRoute_1.default);
mongoose_1.default
    .connect(process.env.MONGODB_URL)
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log("Listening on port 3010");
    });
})
    .catch((err) => console.log(err));
