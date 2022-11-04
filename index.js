import express from 'express'
import * as dotenv from 'dotenv'
import todoRoutes from './routes/todoRoutes.js'
const app = express()

const port = 8080

/** do consume the body as json */
app.use(express.json())

/** initialize the dotenv configuration */
dotenv.config()

/** routes*/
app.use("/", todoRoutes)


app.listen(port, () => {
    console.log("Server started", process.env.PGHOST)
})