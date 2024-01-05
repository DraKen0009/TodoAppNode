import {TodoModel} from "../models/Todo.js";

const deleteTodoController = async (req, res)=>{
    const {id}=req.params
    try{
        const data=await TodoModel.findOneAndDelete({id:id})
        res.json({
            msg:"Successfully Deleted"
        })

    }catch (err){
        res.json({
            "msg":"AN error Occurred"
        })

    }
}



export {deleteTodoController}