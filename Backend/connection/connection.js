const mongoose = require('mongoose');
require('dotenv').config(); 

const uri = process.env.URI;  

const connect = async () => {
  try {
    await mongoose.connect(uri); 
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Something went wrong while connecting to MongoDB:', error.message);
  }
};

connect();
