// load express
const express = require('express')
const path = require('path')
// require the To Do "database"
const studentDb = require('./data/student-db')

// Create our express app
const app = express()
//Configure thre app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//Mount routes middleware (app.use)


//Define a "root" route directly on the app
// Next lesson we'll use better practice rouying
app.get('/', function (req, res) {
    // Path MUST start with a leading slash
    res.redirect('/students')
})
app.get('/home', function (req, res) {
    //Never begin the name of the templete
    // with a forword slash
    res.render('home')
})

app.get('/students', function (req, res) {

    const students = studentDb.getAll()
    res.render('students/index', { students })
})

//Tell the app to listen on port 3000//For HTTP request from clients
app.listen(3000, function () {
    console.log('Listening on port 3000')
})
