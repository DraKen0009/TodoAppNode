import express from "express";
import {Todo} from "../controllers/todoController.js";

const router =express.Router()
const todoController=new Todo()

router.get('/',todoController.getTodo)

router.get('/:id',todoController.getTodo)

router.post('/',todoController.createTodo)

router.put('/:id',todoController.updateTodo)

router.delete('/:id',todoController.deleteTodo)

export default router