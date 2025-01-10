import React from 'react'
import { useLocation } from 'react-router-dom'

export const Profile = () => {
  const location = useLocation()
  const { username } = location.state || {};
  return (
    <div>
      <h1>Profile</h1>
      <h3>This profile is for {username} </h3>
    </div>
  )
}
