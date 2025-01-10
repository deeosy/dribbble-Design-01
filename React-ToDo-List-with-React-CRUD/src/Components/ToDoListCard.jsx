import React from 'react'
import { EditBtnModal } from './EditBtnModal'

function ToDoListCard({toDoEntry, handleDelete, handleEdit}) {
  return (
    <div  className="w-[520px] flex justify-between px-2 py-1 border border-black ">
    <div className="flex gap-4 text-xl ">
      <h3>{toDoEntry.toDoItem} </h3>
      <h3>{toDoEntry.toDoDate} </h3>
      <h3>{toDoEntry.toDoTime} </h3>           
    </div>
    <div className="flex gap-2 items-center  text-white">
      <EditBtnModal toDoEntry={toDoEntry} handleEdit={handleEdit} />
      <button onClick={()=>handleDelete(toDoEntry.id)} className='bg-red-500 rounded-md  px-2 '>Delete</button>
    </div>
    </div> 
  )
}

export default ToDoListCard