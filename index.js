const express = require('express') // import 

const app = express()

const port = 8080

/** do consume the body as json */
app.use(express.json())

app.get("/hello", (req, res) => {
    res.send('hello world')
})

/** todo app CRUD*/

/** todo table */
let todos = [
    {
        id: 1,
        name: "buy milk"
    },
    {
        id: 2,
        name: "book ticket"
    }
]

app.post("/todo", (req, res) => {
    console.log(req.body)
    /** store the data in DB and return the response */
    let data = req.body
    data["id"] = todos.length + 1
    todos = [...todos, data]
    res.send(data)
})

app.get("/todo", (req, res) => {
    res.send(todos)
})

app.get("/todo/:id", (req, res) => {
    const todo = todos.filter(value => value.id == req.params.id)
    res.send(todo)
})

app.put("/todo/:id", (req, res) => {
    console.log(req.params)
    /** how to get the param */
    const id = req.params.id
    const updatedTodo = todos.map(todo => {
        if (todo.id == id) {
            todo.name = req.body.name
        }
        console.log(todo)
        return todo
    })
    todos = [...updatedTodo]
    res.send('update todo')
})

app.put("/todo/done/:id", (req, res) => {
    const id = req.params.id
    const updatedTodo = todos.map(todo => {
        if (todo.id == id) {
            todo["done"] = "y"
        }
        return todo
    })
    todos = [...updatedTodo]
    res.send({})
})

app.delete("/todo/:id", (req, res) => {
    const id = req.params.id
    const updatedTodo = todos.map(todo => {
        if (todo.id == id) {
            todo["deleted"] = true
        }
        console.log(todo)
        return todo
    })
    todos = [...updatedTodo]
    res.send('delete todo')
})


app.listen(port, () => {
    console.log("Server started")
})