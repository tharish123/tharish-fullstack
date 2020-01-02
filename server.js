const express = require('express')
const app = express()('path')
const port =process.env.PORT|| 3000
app.use(express.static(__dirname + '/dist/ngproject'))
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/ngproject/index.html'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))