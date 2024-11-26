import { useState } from 'react'
import './App.css'
import { sculptureList } from './data.js'





// const [count, setCount] = useState(0)
export default function Gallery(){
  // let index = 0;
  const [index, setIndex] = useState(0);
  
  function nextImage(){
    // index = index +1;
    setIndex(index + 1);
  }
  
  function previousImage(){
    setIndex(index - 1)
  }
  let sculpture = sculptureList[index];
    return (
      <>
      <div className="p-[14px] ">
      <button onClick={previousImage} className='border border-black p-1 px-2 rounded-md'>Previous</button>
        <button onClick={nextImage} className='border border-black p-1 px-2 rounded-md'>Next</button>
        <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
        <h3>({index+1} of {sculptureList.length})</h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>{sculpture.description}</p>
      </div>
      </>
    )
  }




