const express=require('express');

const app=express();
const PORT= 3034;
const books = require('./routes/books')

app.use(express.json())
app.use('/books',books)




app.listen(PORT,(err)=>{
    if(!err)
        console.log("Serever listening at port 3034");
    else
        console.log("Error occured",err);
})