import React from 'react'

function UserCard(props) {
  // console.log("User " + props.userInfo);
  
  return (
    <div className="border border-black w-[300px] mx-[10px] my-[6px]">
      <h3>Name: {props.userInfo.name} </h3>
      <h3>Email: {props.userInfo.email} </h3>
      <h3>Gen: {props.userInfo.gen} </h3>
    </div>
  )
}

export default UserCard