import express from 'express';
import {connectDB} from "./db/connectDB.js";
import todo from "./routes/todo.js";

const app=express()
const port=process.env.PORT || 8000
const DATABASE_URL=process.env.DATABASE_URL ||  "mongodb+srv://admin:admin@cluster0.k6xnj4l.mongodb.net/todo"


connectDB(DATABASE_URL)
    .then(()=>{
        console.log("connected to Database")
    })

app.use(express.json())
app.use('/',todo)



app.listen(port,()=>{
    console.log(`Listening to server at : http://localhost:${port}`)
})


