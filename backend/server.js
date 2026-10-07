const express = require('express');
const mongoose = require('mongoose');
const projectRouter = require('./routes/project.route');
const skillRouter = require('./routes/skill.route');
const serviceRouter = require('./routes/service.route');
const educationRouter = require('./routes/education.route');
const app = express();
const port = 3000;


app.use(express.json());

mongoose.connect("mongodb://localhost:27017/portfolioDB");

app.use('/app', projectRouter);
app.use('/app', skillRouter);
app.use('/app', serviceRouter);
app.use('/app', educationRouter);

app.get('/', (req,res)=>{
    res.json('hello from backend')
})

app.listen(port,_=>console.log(`server started at port: ${port}`)
)

