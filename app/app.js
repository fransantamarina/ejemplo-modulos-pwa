const express = require('express');
const path = require('path');

const indexRouter= require('./routes/index')
const usersRouter = require('./routes/users')

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/', indexRouter);

module.exports = app;
