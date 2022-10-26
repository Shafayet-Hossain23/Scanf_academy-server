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
app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedCourse = courseDetails.find(c => c.id === id);
    res.send(selectedCourse)
})
app.get('/details/premium/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedCourse = courseDetails.find(c => c.id === id);
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})