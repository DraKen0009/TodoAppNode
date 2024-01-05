import {TodoModel} from "../models/Todo.js";


const getTodoController = async (req, res)=>{
    const {id}=req.params
    try{
        if(id){
            const data=await TodoModel.find({id:id})
            return res.json(data)
        }
        const data=await TodoModel.find()
        res.json(data)

    }catch (err){
        res.json({
            "msg":"AN error Occurred"
        })

    }
}

export {getTodoController}