import React from 'react'
import { PiBookOpenText } from 'react-icons/pi'
import {BiUserCircle} from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai";


function BookModal({book, onClose}) {
  return (
    <div className="fixed h-full bg-black bg-opacity-60 top-0 left-0 right-0 bottom z-50 flex justify-center items-center "
    onClick={onClose}
    >
        <div
        onClick={(event)=> event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative "
        >
            <AiOutlineClose
                className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                onClick = {onClose}
            />


             <h2 className="w-fit px-2 bg-red-300 rounded-lg">{book.year}</h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>
      <div className="flex justify- items-center books-center gap-x-2">
        <PiBookOpenText className="text-text-2xl"/>
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center books-center gap-x-2 mb-1">
          <BiUserCircle className="text-red-300 text-2xl"/>
          <h2 className="my-1">{book.author}</h2>
      </div>
      
      <p className="size-5 w-full font-bold my-2">Lorem Ipsum</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit deserunt quam reprehenderit ab, ipsum corrupti enim atque nulla quos, aut explicabo, aspernatur modi maiores harum? Neque eius tenetur vel quo.</p>
    </div>
</div>
  )
}

export default BookModal
