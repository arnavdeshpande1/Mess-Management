const express = require('express');
const connectDB = require('./config/db');

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

//define routes

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/admin',require('./routes/api/admin'));
app.use('/api/authadmin',require('./routes/api/authadmin'));




const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log('Server started on port ${PORT}'));




