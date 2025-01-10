import { useState } from 'react'
import './App.css'
import EntryForm from './Components/EntryForm'
import ToDoList from './Components/ToDoList'

function App() {
  const [toDoList, setToDoList] = useState([])
    //save function for displaying on the window
  const handleSaveEntry = (toDoEntry) => {
    setToDoList([...toDoList, toDoEntry ])
  }
  const handleDelete = (id) => {
    setToDoList(toDoList.filter((toDoEntry)=> toDoEntry.id !== id ))
  }
  const handleEdit = (id, editedEntry) => {
    setToDoList(toDoList.map((toDoEntry)=>{
      if(toDoEntry.id === id){
        return editedEntry;
      }else{
        return toDoEntry;
      }
    }))
  }

  return (
    <>
    <div className="bg-blue-gray-400  p-[20px]">
      <h1 className='text-3xl font-sans flex flex-col playwrite-co-guides-regular'> To-Do List <span className='text-[19px] font-sans ' >Organize Your Work & Life</span> </h1>
      <div className="flex flex-col gap-4 w-fit mx-auto mt-[30px] ">
        <EntryForm handleSaveEntry={handleSaveEntry} />
        <ToDoList toDoList={toDoList} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div>

    </div>
    </>
  )
}

export default App
