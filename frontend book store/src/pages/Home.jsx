import React from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner.jsx'
import { Link } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import BooksTable from '../components/home/BooksTable.jsx'
import BooksCard from '../components/home/BooksCard.jsx'

function Home() {
  const [books,setBooks] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [showType, setShowType] = React.useState("table")

  React.useEffect(()=>{
    setLoading(true)
    axios.get("http://localhost:5000/books")
    .then((response)=> {
      setBooks(response.data.data)
      setLoading(false)
    })
    .catch(error =>{
      console.error(error)
      setLoading(false)
    })
  },[])

  return (
    <div className="p-4 ">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="border-2 border-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded-lg"
            onClick = {()=> setShowType("table")}
          >
            Table
          </button>
          <button
            className="border-2 border-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded-lg"
            onClick = {()=> setShowType("card")}
          >
            Cards
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8"> Books List</h1>
          <Link to="/books/create">
              <MdOutlineAddBox className="text-red-500 hover:text-red-700 text-4xl"/>
          </Link>
        </div>
        {
          loading ? <Spinner/> : showType === "table" ? (<BooksTable books = {books}/>) : (<BooksCard books = {books}/>)
        }
    </div>
  )
}

export default Home