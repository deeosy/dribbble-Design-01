import React from 'react'
import ToDoListCard from './ToDoListCard'

function ToDoList({toDoList, handleDelete, handleEdit}) {

  const displayTitle = toDoList[0];
  return (
    <div>
      <h1 className='mb-3'>
        {displayTitle ? "To-Do List" : ""} 
      </h1>
      <div className=" flex flex-col gap-2"> 
        {toDoList.map((toDoEntry)=>(
            <ToDoListCard key={toDoEntry.id} toDoEntry={toDoEntry} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))}
      </div>
    </div>
  )
}

export default ToDoList