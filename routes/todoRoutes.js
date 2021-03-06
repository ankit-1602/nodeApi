import express from 'express'
import { Router } from 'express'
import axios from 'axios'

Router.get('/todos',async (req,res)=>{
    const url='https://jsonplaceholder.typicode.com/todos';
    
    const {data}=await axios.get(url)
    console.log(data)
    
    let result=data.map((item)=>{
        return {
            id:item.id,
            title:item.title,
            completed:item.completed
        }
    })
    res.json(result)
})

export default Router;