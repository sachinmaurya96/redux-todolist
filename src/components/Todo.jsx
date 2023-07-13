import React, { useState } from "react";
import { CiTrash } from "react-icons/ci";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./action";

function Todo() {
    const dispatch = useDispatch()
    const [text,setText] =useState('')
    const [editId,setEditId] = useState(null)
    const state = useSelector(state=>state)
   const handleSubmit =(e)=>{
    if(!text){
        alert("please input")
    }else if(editId !== null){
        dispatch(editTodo(editId,text))
        setEditId(null)
    }else{
        dispatch(addTodo(text))
    }
   
    setText(state.value)
   }
   const handleEdit =(i)=>{
       setText( state.todos[i])
       setEditId(i)
   }
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Add todos
            </label>
            <input
            value={text}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e)=>setText(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">
            {
                editId !== null ? "Edit":"submit"
            }
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Todo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           {
            state?.todos.map((elm,i)=>{
                return(
                    <tr>
                    <td>{elm}</td>
                    <td>
                      <span style={{cursor:"pointer"}} onClick={()=>dispatch(removeTodo(i))}><CiTrash fontSize="25px"/></span>
                      <span style={{cursor:"pointer"}} onClick={()=>handleEdit(i)}><BiEdit fontSize="25px"/></span>
                    </td>
                  </tr>
                )
            })
           }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Todo;
