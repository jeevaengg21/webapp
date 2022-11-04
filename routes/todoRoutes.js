import express from 'express'
const router = express.Router();
import TodoRepository from '../repository/todoRepository.js'


router.post("/todo", async (req, res) => {
    console.log(req.body)
    /** store the data in DB and return the response */
    let data = req.body
    const result = await TodoRepository.createTodo(data)
    res.send(result)
})

router.get("/todo", async (req, res) => {
    const result = await TodoRepository.getTodo()
    res.send(result)
})


router.put("/todo/done/:id", async (req, res) => {
    const id = req.params.id
    const result = await TodoRepository.updateTodoStatus(id, 1)
    res.send(result)
})

router.delete("/todo/:id", async (req, res) => {
    const id = req.params.id
    const result = await TodoRepository.deleteTodo(id)
    res.send(result)
})

export default router;