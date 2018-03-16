const mongoose = require('mongoose')


const taskSchema = mongoose.Schema({
  name: String,
  dueDate: Number,
  contents: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)
