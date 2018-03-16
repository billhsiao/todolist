require('dotenv').config();
const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL)

db.once('open', () => {
  console.log(`Mongoose connected to:
  ${process.env.DATABASE_URL}`);
});

db.on('error', (err) => {
  console.log(`Database error:\n${err}`);
})
