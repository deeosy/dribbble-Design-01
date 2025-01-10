import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react"; 
 
export function EditBtnModal({toDoEntry, handleEdit}) {
  // console.log(toDoEntry);
  
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  const [toDoItem, setToDoItem]=useState(toDoEntry.toDoItem);
  const [toDoDate, setToDoDate] = useState(toDoEntry.toDoDate);
  const [toDoTime, setToDoTime] = useState(toDoEntry.toDoTime)

  const handleToDoItem = (e) => {
    setToDoItem(e.target.value)
  }
  const handleToDoDate = (e) => {
    setToDoDate(e.target.value)
  }
  const handleToDoTime = (e) => {
    setToDoTime(e.target.value)
  }
  const handleEditEntry=(e) => {
    let updatedToDoEntry = {
      toDoItem, toDoDate, toDoTime, id: toDoEntry.id
    }
    handleEdit(toDoEntry.id, updatedToDoEntry);
    handleOpen(false)
    e.preventDefault();

  }
 
  return (
    <>
      <Button className='bg-green-500 rounded-md px-3 py-1 normal-case text-sm font-semibold' onClick={handleOpen}  >
        Edit
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Update task.</DialogHeader>
        <DialogBody>
          <form className='flex gap-2' >
            <div className="flex flex-col">
              <label htmlFor="toDoItem">To-Do Item</label>
              <input value={toDoItem} onChange={handleToDoItem} type="text" id="toDoItem"  className='border border-black py-[1px] px-2 ' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="toDoDate">Date</label>
              <input value={toDoDate} onChange={handleToDoDate} type="date" id="toDoDate" pattern="\d{2}-\d{2}-\d{4}"  className='border border-black' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="toDoTime">Time</label>
              <input value={toDoTime} onChange={handleToDoTime} type="time" id="toDoTime"  className='border border-black' />
            </div>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleEditEntry}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}