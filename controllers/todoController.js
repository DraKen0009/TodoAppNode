import {TodoModel} from "../models/Todo.js";

class Todo {
    async getTodo(req, res) {
        const {id} = req.params
        try {
            if (id) {
                const data = await TodoModel.find({id: id})
                return res.json(data)
            }
            const data = await TodoModel.find()
            res.json(data)
        } catch (err) {
            res.json({
                "msg": "AN error Occurred"
            })
        }
    }

    async createTodo(req, res) {
        const {title, description} = req.body
        if (!title) {
            return res.json({
                msg: "title parameter needed"
            })
        }
        if (!description) {
            return res.json({
                msg: "Description parameter needed"
            })
        }
        try {
            const todoData = new TodoModel({
                title: title,
                description: description
            })
            const data = await todoData.save()
            return res.json({
                msg: "created todo task",
                data: data
            })
        } catch (err) {
            console.log(err)
            res.json({
                "msg": "AN error Occurred"
            })
        }
    }

    async updateTodo(req, res) {
        const {id} = req.params
        const {title, description} = req.body
        const updateFields = {}
        if (title) {
            updateFields['title'] = title
        }
        if (description) {
            updateFields['description'] = description
        }
        try {
            await TodoModel.updateOne(
                {id: id},
                updateFields)
            console.log('yha pe')
            return res.json({
                msg: "Successfully Updated"
            })
        } catch (err) {
            console.log(err)
            return res.json({
                "msg": "AN error Occurred"
            })
        }
    }

    async deleteTodo(req, res) {
        const {id} = req.params
        try {
            await TodoModel.findOneAndDelete({id: id})
            res.json({
                msg: "Successfully Deleted"
            })
        } catch (err) {
            res.json({
                "msg": "AN error Occurred"
            })
        }
    }
}


export {Todo}