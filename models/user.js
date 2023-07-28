// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'First name is required']
  },
  email: {
    type: String,
    required: [true,  'Email address is required'],
  },
  password: {
    type: String,
    required: [true,  'Password is required']
  },
},{timestamps: true})

//export

console.log('userSchema', userSchema)
const User = mongoose.model('users', userSchema)
module.exports = User;