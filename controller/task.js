const task = require('../model/task')

const index = (req, res, next) => {
  res.render('index', { title: 'Express' });
}

module.exports = {
  index
}
