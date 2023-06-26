import React, { useEffect, useState } from 'react'
import ToDo from './ToDo'
import { getAllToDo, addToDo, updateToDo, deleteToDo } from './utlis/HandleApi';

const App = () => {
  const [toDo, setToDo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoID, setToDoID] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, [])

  const updateMode = (_id, title, description) => {
    setIsUpdating(true);
    setTitle(title);
    setDesc(description);
    setToDoID(_id);
  }

  return (
    <div className="App" >
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Title"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }} />
        </div>
        <div className="top">
          <input
            type="text"
            placeholder="Add Description"
            value={description}
            onChange={(e) => { setDesc(e.target.value) }}
          />
        </div>
        <div>
          <button className="add" onClick={isUpdating ? () => updateToDo(toDoID, title, description, setToDo, setTitle, setDesc, setIsUpdating) : () => { addToDo(title, description, setTitle, setDesc, setToDo) }}>
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
      </div>
      <div className="list">
        {toDo.map((item) => {
          return (
            <ToDo
              title={item.title}
              key={item._id}
              description={item.description}
              updateMode={() => { updateMode(item._id, item.title, item.description) }}
              deleteToDo={() => deleteToDo(item._id, setToDo)} />
          )
        })
        }
      </div>
    </div>
  )
}

export default App
