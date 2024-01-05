import {TodoModel} from "../models/Todo.js";

const updateTodoController = async (req, res)=>{
    const {id}=req.params
    const {title,description}=req.body
    const updateFields={}
    if(title){
        updateFields['title']=title
    }
    if(description){
        updateFields['description']=description
    }
    try{
        const data=await TodoModel.updateOne(
            {id:id},
            updateFields)
        console.log('yha pe')
        return res.json({
            msg:"Successfully Updated"
        })
    }catch (err){
        console.log(err)
        return res.json({
            "msg":"AN error Occurred"
        })

    }
}

export {updateTodoController}