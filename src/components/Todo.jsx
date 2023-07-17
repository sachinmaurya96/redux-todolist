import { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync, deleteTodoAsync, editTodoAsync, fetchTodoAsync, selectTodo } from "./todoSlice";
function Todo() {
  const [text, setText] = useState("");
  const [data, setdata] = useState();
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch()
  const todos = useSelector(selectTodo)

  const handleSubmit = () => {
    
    if(!text){
      alert("please write something")
    }else if(editId !== null){
        const update ={
          text,
          id:editId.id
        }
        dispatch(editTodoAsync(update))
        setEditId(null)
    }else{
      dispatch(addTodoAsync(text))
    }
    setText("");
  };
  const handleRemove = (id) => {
    dispatch(deleteTodoAsync(id))
  };

  const handleEdit = (elm) => {
    setText(todos?.map((elem)=>{
      if(elem.id===elm.id){
        return elem.text
      }
    }));
    setEditId(elm);
  };

  
  useEffect(() => {
    dispatch(fetchTodoAsync())
  },[dispatch]);
 
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <div className="mb-3">
            <label className="form-label">
              Add todos
            </label>
            <input
              value={text}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            {editId !== null ? "Edit" : "submit"}
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Todo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((elm, i) => {
              return (
                <tr key={i}>
                  <td>{elm.text}</td>
                  <td>
                    <span
                      onClick={() => handleRemove(elm.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <CiTrash fontSize="25px" />
                    </span>
                    <span
                      onClick={() => handleEdit(elm)}
                      style={{ cursor: "pointer" }}
                    >
                      <BiEdit fontSize="25px" />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Todo;
