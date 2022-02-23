import express from 'express' 
import axios from 'axios'
const app=express()

app.get('/todos',async (req,res)=>{
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

app.get('/user/:id',async (req,res)=>{
    
})


const PORT=5000
app.listen(PORT,()=>{
    console.log(`Server running at PORT : ${PORT}`)
})