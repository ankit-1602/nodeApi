import axios from "axios";
import { Router } from "express";

const getUser=async (req,res)=>{
    const id=req.params.id 
    const userURI=`https://jsonplaceholder.typicode.com/users/${id}`
    const todosURI=`https://jsonplaceholder.typicode.com/todos`
    try {
        const {data}=await axios.get(userURI)
        const response=await axios.get(todosURI)
        const todos=response.data
        let userTodos=todos.filter(function(item){
            return item.userId == id;
        })
        let result={
            id:data.id,
            name:data.name,
            email:data.email,
            phone:data.phone,
            todos:userTodos
        }
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export default getUser