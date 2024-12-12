import React from 'react'

function SearchBar() {
  return (
    <form className='flex flex-col gap-2 my-4' >
    <input type="text" placeholder="Search..." className='border border-black w-[240px] px-2 py-1 '/>
    <label>
      <input type="checkbox" />
      {' '}
      Only show products in stock
    </label>
  </form>
  )
}

export default SearchBar