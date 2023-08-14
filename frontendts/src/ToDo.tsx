import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
interface PropsType {
  title: string;
  description: string;
  updateMode: () => void;
  deleteToDo: () => void;
}
const ToDo = (props: PropsType) => {
  const { title, description, updateMode, deleteToDo } = props;
  return (
    <div className="todo">
      <div className="text">{title}</div>
      <div className="text">{description}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
