# How to create the express app project

https://expressjs.com/en/starter/installing.html

# How to create simple web app

```
const express = require('express')
const app = express()
const port = 3000

/** do consume the body as json */
app.use(express.json())

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

```