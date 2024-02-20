import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from "../components/Spinner.jsx";
import BackButton from "../components/BackButton.jsx";


function ShowBook() {
  const [book,setBook] = React.useState({})
  const [loading,setLoading] = React.useState(false)
  const { id } = useParams()

  React.useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5000/books/${id}`)
    .then((response)=>{
        setBook(response.data)
        setLoading(false)
    }) .catch((error)=>{
      console.error(error)
      setLoading(false)
    })
  },[])

  const vals = [
    "ID:",
    "Title:",
    "Author:",
    "Publish Year:",
    "Time Created:",
    "Updated Time:",
  ]



  
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Show Book</h1>
      {
        loading ? (
          <Spinner/>
        ) : (
          <div className="flex flex-col items-center border-2 border-red-500 rounded-xl sm:w-full md:w-[600px] m-auto lg:w-[800px] xl:w-[1000px] p-4">
            {
              vals.map((item,index)=>{
                const values = [
                  "_id",
                  "title",
                  "author",
                  "year",
                  "createdAt",
                  "updatedAt"
                ]
                return(
                  <div key={index} className="my-4">
                    <span className="text-xl mr-4 text-gray-500">{item}</span>
                    <span>{book[values[index]]}</span>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default ShowBook