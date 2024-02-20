import React from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'



function EditBook() {
  const [title,setTitle] = React.useState("")
  const [author,setAuthor] = React.useState("")
  const [year,setYear] = React.useState("")
  const [loading,setLoading] = React.useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  
  React.useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5000/books/${id}`)
    .then((response)=>{
      setTitle(response.data.title)
      setAuthor(response.data.author)
      setYear(response.data.year)
      setLoading(false)
    }) .catch((error)=>{
        setLoading(false)
        console.error(error)
    })
  },[])

  function handleEditBook(){
    const data = {
      title,
      author,
      year
    }
    setLoading(true)
    axios.put(`http://localhost:5000/books/${id}`, data)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar("Book Edited Succesfully", {variant: "success"})
      navigate("/")
    }) .catch((error)=>{
      console.error(error)
      setLoading(false)
      enqueueSnackbar("Error", {variant: "error"})
      console.error(error)
    })
  }

  return (
    <div className="p-5">
      <BackButton className="my-auto"/>
      {loading ? <Spinner/> : ""}
      <div className="flex flex-col border-2 border-red-500 rounded-xl w-full p-4 mx-auto mt-8">
      <h1 className="text-3xl my-5 ">Edit Book</h1>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 my-3 w-full py-2 rounded-md"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input 
            type="text" 
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 my-3 w-full py-2 rounded-md"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input 
            type="text" 
            value={year}
            onChange={(e)=>setYear(e.target.value)}
            className="border-2 border-gray-500 px-4 my-3 w-full py-2 rounded-md"
          />
        </div>
        <button 
          className="p-2 bg-red-500 hover:bg-red-600 m-8 w-[250px] mx-auto rounded-lg text-white"
          onClick={handleEditBook}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default EditBook