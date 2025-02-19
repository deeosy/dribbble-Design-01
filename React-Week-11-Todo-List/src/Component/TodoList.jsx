import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../Slices/TodoSlice' 


export default function TodoList({tasks}) {
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteTask(id));
    
  return (
    <div className='flex flex-col gap-1.5'>
      {tasks.length > 0 ?(
      tasks.map((task) => {
        return <div key={task.id} className="flex justify-between mx-auto  gap-3 w-[310px] border rounded-md p-1 ">
          <h3  >{task.taskEntry}</h3>
          <div className="flex gap-2">
            <div className="bg-gray-300 border border-gray-300 rounded-md py-0.5 px-1 flex  cursor-pointer  hover:border-green-600 ">
              <EditNoteIcon fontSize='small' color='success' /> 
            </div>
            <div onClick={() => handleDelete(task.id)} className="bg-gray-300 border border-gray-300 rounded-md py-0.5 px-1 flex hover:border-green-600 cursor-pointer ">
              <DeleteIcon  fontSize='small' color='error' /> 
            </div>
          </div>
        </div>
        
      })
      ):(
        <p>No tasks available</p>
      )}
    </div>
  );
}
