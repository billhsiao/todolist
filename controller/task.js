const task = require('../model/task')

const index = (req, res) => {
  Task.find({}, (err, tasks) => {
    res.render('tasks/index', {tasks: tasks})
  })
}

const newTask = (req, res) => {
  res.render('tasks/new', {task: {}});
}

const create = (req, res) => {
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  for (var key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var task = new Task(req.body);
  task.save(function(err) {
    if (err) return res.render('tasks/new');
    console.log(task);
    res.redirect('/tasks/new');
  });
}


const edit = (req, res, next) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) return next(err);
    res.render('tasks/edit', {task});
  });
}

const update = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, function(err, task) {
    if (err) return res.render(`tasks/'${req.params.id}'/edit`);
    res.redirect('/tasks');
  });
}

const remove = (req, res) => {
  Task.findByIdAndRemove(req.params.id, function(err) {
    res.redirect('/tasks');
  });
}

const expand = (req, res, next) => {
  Task.findById(req.params.id, function(err, task) {
    if (err) return next(err);
    res.render('tasks/expand', {task});
  });
}
const detail = (req, res) => {
  Task.findById(req.params.id, req.body, function(err, task) {
    if (err) return res.render(`tasks/'${req.params.id}'/expand`);
    res.redirect('/tasks');
  });
}


module.exports = {
  index: index,
  new: newTask,
  create: create,
  edit: edit,
  update: update,
  remove: remove,
  expand: expand,
  detail: detail
}
