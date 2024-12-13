import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
 
export function EditUser(props) {
  console.log(props);
  
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  const [name, setName]= useState(props.userInfo.name)
  const handleName = (e) => {
    setName(e.target.value)
  }
  const [email, setEmail]= useState(props.userInfo.email)
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const [gen, setGen]= useState(props.userInfo.gen)
  const handleGen = (e) => {
    setGen(e.target.value)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    let editedUserInfo ={
      name: name,
      email: email,
      gen: gen,
      id: props.userInfo.id,
    }
    console.log(editedUserInfo);
    
    // calling the edited user info function
      props.editUser(props.userInfo.id, editedUserInfo)
      handleOpen()
  }
 
  return (
    <>
      <Button onClick={handleOpen} className='bg-white font-normal text-[16px] normal-case text-black border border-black px-3 py-1 rounded-md ' >
        Edit
      </Button>
      <Dialog open={open} handler={handleOpen} size="xs"  >
        <DialogHeader>Edit User Details </DialogHeader>
        <DialogBody className="flex justify-center ">
          <form className='flex flex-col w-[200px] border border-black p-4 ' >
            <input value={name} onChange={handleName} type="text" placeholder='Full Name'className='border border-black p-1 rounded-md '/>
            <input value={email} onChange={handleEmail} type="email" placeholder='Email' className='border border-black p-1 rounded-md my-2 '/>
            <input value={gen} onChange={handleGen} type="number" placeholder='Gen' className='border border-black p-1 rounded-md '/>
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
          <Button variant="gradient" color="green" onClick={handleEdit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}