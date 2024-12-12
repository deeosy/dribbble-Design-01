import React from 'react'
import { EditBookInfo } from './EditBookInfo';


function BookList({books, deleteBook, updateBookInfo }) {
  console.log({books});

  
  return (
    <div>
      <h2 className="text-center" >Booklist</h2>
      <div className="flex flex-col gap-2 mt-[20px] ">
        {books.map((book) => {
          return(
            <div key={book.id} className=" border border-gray-400 rounded-md p-2 flex justify-between gap-2   ">
              <div className="">
                <h2 className='text-xl' >{book.title} </h2>
                <h3 className='text-md' > {book.author} </h3>
                <h3 className='text-md text-gray-700' >Publication place: <span className='text-black' >{book.publicationPlace}</span></h3>
                <div className="flex justify-between gap-3 ">
                  <h4 className='text-sm text-gray-700 ' >Year Release: <span className='text-black'>{book.yearRelease}</span> </h4>
                  <h4 className='text-sm text-gray-700' >Pages: <span className='text-black'>{book.pages}</span></h4>
                </div>
              </div>
              <div className="flex flex-col w-[100px] gap-2 py-3 px-1  ">
                {/* edit button */}
                <EditBookInfo book={book} updateBookInfo={updateBookInfo} />
                {/* delete button */}
                <button onClick={()=>deleteBook(book.id)} className='rounded-md text-xl px-2 py-1 border bg-red-300 text-white hover:bg-red-500 hover:font-semibold '>Delete</button>
              </div>
            </div>
          )
        }) }
      </div>
      
    </div>
  )
}

export default BookList