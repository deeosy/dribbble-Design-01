import { Input, } from "@material-tailwind/react";
import { useState } from "react";
import { v4 as uuid } from 'uuid'
 
export function InputVariants({ addNewBook }) {
  const [title, setTitle] = useState('')
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const [author, setAuthor] = useState('')
  const handleAuthor = (e) => {
    setAuthor(e.target.value)
  }
  const [publicationPlace, setPublicationPlace] = useState('')
  const handlePublicationPlace = (e) => {
    setPublicationPlace(e.target.value)
  }

  const [pages, setPages] = useState('')
  const handlePages = (e) => {
    setPages(e.target.value)
  }

  const [yearRelease, setYearRelease] = useState('')
  const handleYearRelease = (e) => {
    setYearRelease(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let newBook = {
      title,
      author,
      publicationPlace,
      yearRelease,
      pages,
      id: uuid(),
    };

    addNewBook(newBook);
    setTitle('');
    setAuthor('');
    setPublicationPlace('');
    setPages('');
    setYearRelease('');


  }

  return (
    <div >
      <h2 className="text-center" >Booklist Form</h2>
      <form className="flex w-72 flex-col gap-6 p-3 " onSubmit={handleSubmit} >
        {/* <Input variant="static" label="Static" placeholder="Static" /> */}
        {/* <Input variant="outlined" label="Outlined" placeholder="Outlined"/> */}
        <Input required onChange={handleTitle} value={title} variant="standard" label="Book Title" placeholder="Title" />
        <Input required onChange={handleAuthor} value={author} variant="standard" label="Book Author" placeholder="Author"/>
        <Input onChange={handlePublicationPlace} value={publicationPlace} variant="standard" label="Publication" placeholder="Place of Publication"/>
        <div className=" flex gap-2 ">
          <Input onChange={handlePages} value={pages} variant="outlined" label="Pages" placeholder="Number of Pages" type="nummber" />
          <Input required onChange={handleYearRelease} value={yearRelease} variant="outlined" label="Year" placeholder="Year Released" type="number" />
        </div>
        <Input className=" transition duration-100 hover:border-r-indigo-900 hover:border-r-2  hover:border-b-indigo-900 hover:border-b-2 hover:cursor-pointer " variant="outlined" type="submit" value="Send" />
      </form>
    </div>
    
  );
}