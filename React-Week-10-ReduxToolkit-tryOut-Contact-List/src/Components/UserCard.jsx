import React from 'react'
import dog from '../images/dog-img.jpg'

export default function UserCard() {
  return (
    <div className=' flex flex-col rounded-lg shadow-md shadow-gray-700 '>
			<div className="mx-auto my-6 pt-2 ">
				<img src={dog} alt="profile-image" className='rounded-full w-46 h-46 mb-4' />
				<h3 className='font-semibold text-lg' >Jane Cooper</h3>
				<p className='opacity-60 ' >Paradigm Representative</p>
				<div className="border border-lime-500 opacity-60 mt-4 text-lime-900 bg-lime-200 w-fit px-3 py-[1px] mx-auto rounded-3xl">
					<p className='text-lime-900' >Admin	</p>
				</div>
			</div>

			<div className="border-t border-t-black flex justify-around text-xl ">
				<div className="border-r">
					<p>Email</p>
				</div>
				<div className="">
					<p>Call</p>
				</div>			
			</div>
      
    </div>
  )
}
