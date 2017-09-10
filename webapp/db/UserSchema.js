'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  created: {type: Date, default: Date.now}

})
