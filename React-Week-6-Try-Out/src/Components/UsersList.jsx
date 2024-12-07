import React from 'react'
import UserCard from './UserCard';


function UsersList(props) {
  // console.log(props.users);
  
  return (
    <div>
      <h2>User List</h2>
        {props.users.map((user)=>{
          return(
            <UserCard userInfo={user} key={user.id} />
          )
        })}
    </div>
  )
}

export default UsersList