import React from 'react'
import {useDispatch,useSelector } from 'react-redux';
import { handleChange,handleDelete,handleSubmit,handleEdit,handleComplete } from './slice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';


function Todo() {
  const states =useSelector((state)=>
  {
    return state.todoSlice
  });
  const dispatch =useDispatch()
  return (
    <div>
        <form onSubmit={(e)=> {e.preventDefault();
        dispatch(handleSubmit());}}>
            <input type="text"  
            value={states.inputValue}
            onChange={(e)=> dispatch(handleChange(e.target.value))}
            />
            <button>Add Task</button>
        </form>
        <ul>
          {
            states.tasks.map((task,index)=> {
              return <li  key={index} 
              style={states.CompleteTask.includes(index) ?{textDecoration:"line-through"}:{}} >
            <span>{task}</span>
        <DeleteIcon className='deleteIcon' onClick={(()=> dispatch(handleDelete(index)))} />
        <EditIcon className='editIcon' onClick={()=> dispatch(handleEdit(index))}  /> 
        <CheckIcon onClick={()=>dispatch(handleComplete(index))}  />
        
              </li>
            })
          }

        </ul>
      
    </div>
  )
}

export default Todo
