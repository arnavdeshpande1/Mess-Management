const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

// to make req.body work 
app.use(express.json());

app.get('/',(req,res) => res.send('API Running'));

//define routes

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));




const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log('Server started on port ${PORT}'));




