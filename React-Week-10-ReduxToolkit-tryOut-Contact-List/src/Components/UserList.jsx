import React from 'react'
import UserCard from './UserCard'
import {v4 as uuid} from 'uuid'

export const UserList = () => {
  return (
    <div className='flex sm:flex-col md:flex-row gap-2 '>
        <UserCard key={uuid()}  />
    </div>
  )
}
