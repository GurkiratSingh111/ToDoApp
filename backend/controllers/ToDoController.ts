import ToDoModel from "../models/ToDoModel";
import { Request, Response } from "express";
interface toDoSchema {
  title: string;
  description: string;
}
type todos = toDoSchema[];
const getToDo = async (req: Request, res: Response) => {
  const toDo: todos = await ToDoModel.find({});
  return res.json(toDo);
};
const saveToDo = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  ToDoModel.create({ title, description }).then((data) => {
    console.log("Added Successfully");
    console.log(data);
    res.json(data);
  });
};

const updateToDo = async (req: Request, res: Response) => {
  const { _id, title, description } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { title, description })
    .then(() => res.status(201).send("Updated Successfully..."))
    .catch((err) => res.status(500).send("Error Occurred..."));
};

const deleteToDo = async (req: Request, res: Response) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.status(201).send("Deleted Successfully..."))
    .catch((err) => res.status(500).send("Error Occured..."));
};

export { getToDo, saveToDo, updateToDo, deleteToDo };
