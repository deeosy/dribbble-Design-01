import { useState } from 'react'
import './App.css'
import { InputVariants } from './Components/Form'
import BookList from './Components/BookList'

function App() {

  const [books, setBooks] = useState([])

  const newBook = (book) => {
    setBooks([...books, book])
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book)=>book.id !== id ))
  }

  const updateBookInfo = (id, bookInfo) => {
    setBooks(
      books.map((book) => {
        if(book.id === id) {
          return bookInfo;
        }else{
          return book;
        }
      })
    )
  }

  return (
    <>
    <div className="flex gap-[200px] p-3 justify-center mt-[20px]">
      <InputVariants addNewBook={newBook}  />
      <BookList books={books} deleteBook={deleteBook} updateBookInfo={updateBookInfo} />
    </div>
    </>
  )
}

export default App
