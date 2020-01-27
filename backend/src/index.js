const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes.js')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-i0rj1.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(3333)
