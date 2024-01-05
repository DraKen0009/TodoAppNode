import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose.connection);

const todoSchema=mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

todoSchema.plugin(AutoIncrement, { inc_field: 'id' });

const TodoModel=mongoose.model('Todo',todoSchema)

export {TodoModel}