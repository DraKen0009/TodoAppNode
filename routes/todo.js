import express from "express";
import {createTodoController} from "../controllers/createTodoController.js";
import {getTodoController} from "../controllers/getTodoController.js";
import {updateTodoController} from "../controllers/updateTodoController.js";
import {deleteTodoController} from "../controllers/deleteTodoController.js";

const router =express.Router()


router.get('/',getTodoController)

router.get('/:id',getTodoController)

router.post('/',createTodoController)

router.put('/:id',updateTodoController)

router.delete('/:id',deleteTodoController)

export default router