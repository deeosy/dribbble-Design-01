import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import { useDispatch, } from 'react-redux'
import { addTask } from '../Slices/TodoSlice' 

export default function TodoForm() {
	const dispatch = useDispatch()
    const [taskEntry, setTaskEntry] = useState('')
    const handleTaskEntry = (e) => {
      setTaskEntry(e.target.value) //handles the changes done in the input field
    }

		const handleEntrySubmit = (e) => {
			e.preventDefault()
			if(!taskEntry.trim()) return; //this prevents empty task addition

			const newTaskEntry = {
				id: uuid(),
				taskEntry,
			}
			dispatch(addTask(newTaskEntry)); //Dispatch action
			setTaskEntry('');		
		}
  return (
    <div>
		<form onSubmit={handleEntrySubmit} className='flex gap-1 ' >
			<div className="border rounded-md hover:border hover:border-blue-400">
			<input value={taskEntry} onChange={handleTaskEntry} type="text" />

			</div>
			<button  type='submit'>Submit</button>
		</form>
  </div>
  )
}
