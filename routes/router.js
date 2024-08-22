const express = require('express');
const router = express.Router();
const {createTodo,getTodos,deleteTodos} = require('../controllers/todocontroller')

router.route("/get-todos").get(getTodos);

router.route("/post-todo").post(createTodo);

router.route("/delete-todo/:todoId").delete(deleteTodos);

module.exports = router;