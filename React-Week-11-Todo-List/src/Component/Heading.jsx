import React from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function Heading() {
  return (
    <div className='w-[100vw] p-5 bg-[#1a1a1a] flex items-center gap-2 ' >
      <AddTaskIcon fontSize='small' color='success' />
      <h1 className='' >Task Manager</h1>
    </div>
  )
}
