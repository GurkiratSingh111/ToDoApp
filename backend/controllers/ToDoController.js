const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.json(toDo);
}
module.exports.saveToDo = async (req, res) => {
    const { title, description } = req.body;
    ToDoModel.create({ title, description }).then((data) => {
        console.log("Added Successfully");
        console.log(data);
        res.send(data);
    })
}

module.exports.updateToDo = async (req, res) => {
    const { _id, title, description } = req.body;
    ToDoModel.findByIdAndUpdate(_id, { title, description }).then(() =>
        res.status(201).send("Updated Successfully...")).catch((err) =>
            res.status(500).send("Error Occurred..."));
}

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    ToDoModel.findByIdAndDelete(_id).then(() =>
        res.status(201).send("Deleted Successfully...")).catch((err) =>
            res.status(500).send("Error Occured..."));
}