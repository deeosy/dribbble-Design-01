import React, { useState } from "react";
import { Input, } from "@material-tailwind/react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function EditBookInfo({book, updateBookInfo}) {
  console.log({book})
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  const [title, setTitle] = useState(book.title)
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const [author, setAuthor] = useState(book.author)
  const handleAuthor = (e) => {
    setAuthor(e.target.value)
  }
  const [publicationPlace, setPublicationPlace] = useState(book.publicationPlace)
  const handlePublicationPlace = (e) => {
    setPublicationPlace(e.target.value)
  }
  const [pages, setPages] = useState(book.pages)
  const handlePages = (e) => {
    setPages(e.target.value)
  }
  const [yearRelease, setYearRelease] = useState(book.yearRelease)
  const handleYearRelease = (e) => {
    setYearRelease(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let editedBookInfo = {
      title,
      author,
      publicationPlace,
      yearRelease,
      pages,
      id: book.id,
    };
    updateBookInfo(book.id, editedBookInfo);
    setOpen(false)
  }
 
  return (
    <>
      <Button onClick={handleOpen} className='normal-case rounded-md px-2 py-1 border font-normal bg-green-300 text-white text-xl hover:bg-green-500 hover:font-semibold hover:shadow-none'>Edit</Button>
      <Dialog open={open} handler={handleOpen} size="xs" className="w-fit" >
        <DialogHeader>Update Book Information</DialogHeader>
        <DialogBody>
        <form className="flex w-[100%] mx-auto flex-col gap-6 px-14 ">
          <Input required onChange={handleTitle} value={title} variant="standard" label="Book Title" placeholder="Title" />
          <Input required onChange={handleAuthor} value={author} variant="standard" label="Book Author" placeholder="Author"/>
          <Input onChange={handlePublicationPlace} value={publicationPlace} variant="standard" label="Publication" placeholder="Place of Publication"/>
          <div className=" flex gap-2 ">
            <Input onChange={handlePages} value={pages} variant="outlined" label="Pages" placeholder="Number of Pages" type="nummber" />
            <Input required onChange={handleYearRelease} value={yearRelease} variant="outlined" label="Year" placeholder="Year Released" type="number" />
          </div>
      </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
