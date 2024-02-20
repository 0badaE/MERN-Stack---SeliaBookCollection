import React from 'react'
import {useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"
import { useSnackbar } from 'notistack'


function DeleteBooks() {
  const [loading,setLoading] = React.useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const { enqueueSnackbar } = useSnackbar()


  function handleDeleteBook(){
    setLoading(true)
    axios.delete(`http://localhost:5000/books/${id}`)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar("Book Deleted Succesfully", {variant: "success"})
       navigate("/")
    }) .catch((error) =>{
      setLoading(false)
      enqueueSnackbar("Error", {variant: "error"})

      console.error(error)
    })
  }


  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner/> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto mt-20">
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
      
      <button
      className="bg-red-600 text-white mt-8 p-3 rounded-lg border-2 mx-auto"

      onClick={handleDeleteBook}
      >
        Yes, delete book

      </button>
      </div>
      

     


    </div>
  )
}

export default DeleteBooks