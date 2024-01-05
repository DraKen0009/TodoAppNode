import {TodoModel} from "../models/Todo.js";

const createTodoController = async (req, res)=>{
    const {title,description}=req.body
    if(!title){
        return res.json({
            msg:"title parameter needed"
        })
    }
    if(!description){
        return res.json({
            msg:"Description parameter needed"
        })
    }


    try{
        const todoData=new TodoModel({
            title:title,
            description:description
        })
        const data=await todoData.save()
        return res.json({
            msg:"created todo task",
            data:data
        })

    }catch (err){
        console.log(err)
        res.json({
            "msg":"AN error Occurred"
        })

    }
}

export {createTodoController}