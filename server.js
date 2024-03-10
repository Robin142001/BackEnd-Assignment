const express = require('express')
const mongoose = require('mongoose')
const app = express()
const User = require('./models/userModel')
app.use(express.json())
//routes
app.get('/', (req,res) => {
    res.send("hey there");
})

//Fetching data from database
app.get('/users', async(req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {   
        res.status(500).json({message: error.message});
    }
})
//Sending data to database              
app.post('/users', async(req,res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//fetching specific user data
app.get('/users/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}) 

mongoose.connect('mongodb+srv://admin:admin%40123@ksapi.7wfink2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=KsAPI')
.then( () => {
    console.log("Connected to MongoDB")
    app.listen(3000 , ()=>{
        console.log("Yea the app is up and running");
    })

}).catch((error) => {
    console.log(error)
})