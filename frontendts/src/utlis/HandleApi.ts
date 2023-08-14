import axios from "axios";
const baseURL = "http://localhost:3010";
interface todoSchema {
  _id: string;
  title: string;
  description: string;
}
const getAllToDo = async (setToDo: (x: todoSchema[]) => void) => {
  const { data } = await axios.get(baseURL);
  console.log(data);
  setToDo(data);
};
const addToDo = async (
  title: string,
  description: string,
  setTitle: (x: string) => void,
  setDesc: (x: string) => void,
  setTodo: (x: todoSchema[]) => void
) => {
  try {
    const { data } = await axios.post(`${baseURL}/save`, {
      title,
      description,
    });
    console.log(data);
    setTitle("");
    setDesc("");
    getAllToDo(setTodo);
  } catch (err) {
    console.log(err);
  }
};
const updateToDo = async (
  toDoID: string,
  title: string,
  description: string,
  setToDo: (x: todoSchema[]) => void,
  setTitle: (x: string) => void,
  setDesc: (x: string) => void,
  setIsUpdating: (x: boolean) => void
) => {
  console.log(description);
  try {
    // await axios.put(`${baseURL}/update`, { _id: toDoId, title: title, description: description });
    await axios({
      method: "put",
      url: `${baseURL}/update`,
      data: {
        _id: toDoID,
        title: title,
        description: description,
      },
    });
    setTitle("");
    setDesc("");
    setIsUpdating(false);
    getAllToDo(setToDo);
  } catch (err) {
    console.log(err);
  }
};

const deleteToDo = async (_id: string, setToDo: (x: todoSchema[]) => void) => {
  console.log(_id);
  try {
    // await axios.delete(`${baseURL}/delete`, _id);
    await axios({
      method: "delete",
      url: `${baseURL}/delete`,
      data: { _id },
    });
    getAllToDo(setToDo);
  } catch (err) {
    console.log(err);
  }
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
