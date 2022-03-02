import axios from "axios";

const getUserTodos=async (req,res)=>{
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
}

export default getUserTodos