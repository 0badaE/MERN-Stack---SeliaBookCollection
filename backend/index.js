import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import bookRoutes from "./routes/booksRoute.js"
import cors from "cors"

const app = express()

//middleware for parsing request body
app.use(express.json())


//middleware for handling CORS policy
/*CORS lifts the restrictions by the server to block requests; 
allows the frontend to connect with the backend */
app.use(cors())



app.get("/", (request,response)=>{
    console.log(request)
    return response.send("This is working")
})

// all requests for /books will be handled by bookRoutes
app.use("/books", bookRoutes)


//Connecting to DB && launching server
mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App connected to DB")
        app.listen(PORT || 3000, ()=>{
            console.log(`Running from PORT:${PORT}`)
        })
    }) .catch((error)=>{
        console.error(error)
    })

