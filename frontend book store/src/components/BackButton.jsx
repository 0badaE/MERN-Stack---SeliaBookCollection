import { Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"

function BackButton({destination = "/"}){
  return (
    <div className="flex">
        <Link
            to = {destination}
            className='bg-red-500 text-white px-4 py-1 rounded-lg w-fit hover:bg-red-600'
        >
            <BsArrowLeft className="text-2xl"/>
        </Link>
    </div>
  )
}

export default BackButton