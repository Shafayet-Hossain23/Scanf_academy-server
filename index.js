const express = require('express')
const app = express()
const port = process.env.port || 5000
var cors = require('cors')

const courseName = require('./data/courses.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!!')
})
app.get('/course-name', (req, res) => {
    res.send(courseName)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})