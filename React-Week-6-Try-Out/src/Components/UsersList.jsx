import React from 'react'
import UserCard from './UserCard';


function UsersList(props) {
  // console.log(props);
  
  return (
    <div>
      <h2>User List</h2>
        {props.users.map((user)=>{
          return(
            <UserCard userInfo={user} key={user.id} deleteUser={props.deleteUser} editUser={props.editUser} />
          )
        })}
    </div>
  )
}

export default UsersList