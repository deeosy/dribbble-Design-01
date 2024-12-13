import React from 'react'
import { EditUser } from './EditUser';

function UserCard(props) {
  // console.log(props);
  
  return (
    <div className="border border-black w-[300px] mx-[10px] my-[6px] px-3 py-1 flex justify-between ">
      <div className="">
        <h3>Name: {props.userInfo.name} </h3>
        <h3>Email: {props.userInfo.email} </h3>
        <h3>Gen: {props.userInfo.gen} </h3>
      </div>
      <div className=" flex flex-col justify-between  ">
        {/* <button className='border border-black px-3 p-1 rounded-md ' >Edit</button> */}
        <EditUser editUser={props.editUser} userInfo={props.userInfo} />
        <button onClick={()=>props.deleteUser(props.userInfo.id)} className='border border-black px-3 p-1 rounded-md '>Delete</button>
      </div>
    </div>
  )
}

export default UserCard