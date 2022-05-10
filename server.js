const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const app = express();

//connect database
connectDB();


const cors = require('cors');
const corsOpt = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','DELETE'],
    allowedHeaders: ['Content-Type', 'x-auth-token'],
    exposedHeaders: ['Content-Type', 'x-auth-token']
};
app.use(cors(corsOpt));


// to make req.body work 
app.use(express.json());

app.get('/',(req,res) => res.send('API Running'));

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logger.log'), { flags: 'a' })


//define routes

app.use(morgan(':date :method :url :status :res[content-length] - :response-time ms',{stream:accessLogStream}));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/admin',require('./routes/api/admin'));
app.use('/api/authadmin',require('./routes/api/authadmin'));
app.use('/api/menu', require('./routes/api/menu'))
app.use('/api/commentsection', require('./routes/api/commentsection'))



const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log('Server started on port ${PORT}'));

module.exports = app




