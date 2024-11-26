import React from 'react'

export default function Button(props) {
  console.log(props);
  return (
    <div className='p-2'>
      <button className={`border border-black p-1 rounded-md ${props.color}`} >{props.title}</button>
    </div>
  )
}
