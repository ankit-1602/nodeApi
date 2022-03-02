import express from 'express';
import axios from 'axios';
import getUser from './controller/userController.js';
import getUserTodos from './controller/todosController.js';
const app=express();

app.get('/todos',getUserTodos)
app.get('/user/:id',getUser)

const PORT = 5000

app.listen(PORT,()=>{
    console.log(`Server running at PORT : ${PORT}`)
})