import express from "express"
import { Book } from "../models/bookmodel.js"




const router = express.Router()


//router.post("/books", async (request,response)=>{
    // no need to have /books anymore since we are using a router in the index.js called books.  

//Route to create a new book
router.post("/", async (request,response)=>{
    try{
        if (!request.body.title ||
        !request.body.author||
        !request.body.year) {
            return response.status(400).send({
                message: "Fill all the the required fields: title, author, and year."
            });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            year:  request.body.year,
        }
        const bookCreate = await Book.create(newBook);
        return response.status(201).send(bookCreate);
    } catch(error){
        console.error(error)
        response.status(500).send({message: error.message});
    }
    
})

//Route to GET all the books from the DB
router.get("/", async(request,response)=>{
    try{
        /* pass in an empty object to get a list of all the 
        books from the DB and save it in the books var. */
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch(error){
        console.error(error)
        response.status(500).send({message: error.message})
    }
})
//Route to GET a single book from the DB by ID
router.get("/:id", async(request,response)=>{
    try{
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch(error){
        console.error(error)
        response.status(500).send({message: error.message})
    }
})

//Route to update the books
router.put("/:id", async(request,response)=>{
        try{
            if (
            !request.body.title ||
            !request.body.author||
            !request.body.year
            ) {
                return response.status(400).send({
                    message: "Fill all the the required fields: title, author, and year."
                });
            }

            const { id } = request.params;

            const result = await Book.findByIdAndUpdate(id, request.body);
            if(!result){
                return response.status(404).json({message: "Book not found"})
            } 
            return response.status(200).send({message: "Book updated succesfully!"}) 

        } catch(error){
        console.error(error)
        response.status(500).send({message: error.message})
    }

})

// Deleting a book
router.delete("/:id", async(request,response)=>{
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id)
        if(!result){
            return response.status(404).json({message: "Book not found"})
        } 
        return response.status(200).send({message: "Book deleted succesfully!"})
    } catch (error) {
        console.error(error)
        response.status(500).send({message: error.message})
    }
})    

export default router