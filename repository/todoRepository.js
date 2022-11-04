// const { Pool, Client } = require('pg')

import pkg from 'pg';
const { Pool, Client } = pkg;

// pools will use environment variables
// for connection information
const pool = new Pool()


const testQuery = () => {
    pool.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
    })
}

const getTodo = async () => {
    try {
        const result = await pool.query('select * from todolist');
        console.log(result.rows)
        return result.rows;
    } catch (error) {
        console.log(error)
        throw error
    }
}

const createTodo = async (data) => {
    try {
        const query = 'insert into todolist(name, done) values ($1, $2) Returning id'
        const value = [data.name, data.done]
        const result = await pool.query(query, value)
        return { ...data, id: result.rows[0].id }
    } catch (error) {
        throw error
    }
}

const updateTodoStatus = async (id, done) => {
    try {
        const query = "update todolist set done=$1 where id=$2"
        const values = [done, id]
        const result = await pool.query(query, values);
        return result.rows
    } catch (error) {
        throw error
    }
}

const deleteTodo = async (id) => {
    try {
        const query = "delete from todolist where id=$1"
        const value = [id]
        const result = await pool.query(query, value)
        return result.rows
    } catch (error) {
        throw error
    }
}

const TodoRepository = {
    testQuery,
    getTodo,
    createTodo,
    updateTodoStatus,
    deleteTodo
}

export default TodoRepository;
