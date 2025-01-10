import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

function EntryForm({handleSaveEntry}) {
  const [toDoItem, setToDoItem]=useState('');
  const [toDoDate, setToDoDate] = useState('');
  const [toDoTime, setToDoTime] = useState('')

  const handleToDoItem = (e) => {
    setToDoItem(e.target.value)
  }
  const handleToDoDate = (e) => {
    setToDoDate(e.target.value)
  }
  const handleToDoTime = (e) => {
    setToDoTime(e.target.value)
  }

  const handleSave=(e) => { 
    e.preventDefault();
    let toDoEntry = {
      toDoItem, toDoDate, toDoTime, id:uuid()
    }
    handleSaveEntry(toDoEntry);
    setToDoItem('');
    setToDoDate('');
    setToDoTime('');
  }  

  return (
    <div className='w-fit border border-black p-3'>
      <form onSubmit={handleSave} className='flex gap-2' >
        <div className="flex flex-col">
          <label htmlFor="toDoItem">To-Do Item</label>
          <input required value={toDoItem} onChange={handleToDoItem} type="text" id="toDoItem"  className='border border-black py-[1px] px-2 ' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="toDoDate">Date</label>
          <input value={toDoDate} onChange={handleToDoDate} type="date" id="toDoDate"  className='border border-black' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="toDoTime">Time</label>
          <input value={toDoTime} onChange={handleToDoTime} type="time" id="toDoTime"  className='border border-black' />
        </div>
        <input type="submit" value="Save" className='border border-black place-self-end px-3 py-[1px] ' />
      </form>
    </div>
  )
}

export default EntryForm