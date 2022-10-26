const express = require('express')
const app = express()
const port = process.env.port || 5000
var cors = require('cors')

const courseName = require('./data/courses.json')
const courseDetails = require('./data/course-details.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send(courseDetails)
})
app.get('/course-name', (req, res) => {
    res.send(courseName)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})