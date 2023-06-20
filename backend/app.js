// import bodyParser from "body-parser";
import express  from "express";
import mongoose from "mongoose";
import AutoSave from "./model/autosave.js";


const app=express();



app.use(express.text())


app.get('/',(req,res)=>{
    res.json({message:"this is a message"})
})

app.post('/autosave',async(req,res)=>{
  let data = req.body;
  let newData =  new AutoSave({
    description:data
  })

  await newData.save()
//   res.redirect("/")
})


mongoose.connect('mongodb://127.0.0.1:27017/DocsDB')
.then(()=>{
    console.log('Connected to database')
}).catch(err =>{
    console.log('Oops Error!');
    console.log(err)

})

app.listen(8000,()=>{
    console.log("Listening at 8000")
})