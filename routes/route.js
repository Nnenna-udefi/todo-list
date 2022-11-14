const todo = require("../models/todo");

const router = require("express").Router()


router.get("/", (req, res) => {

    const allTodo = await todo.find()
    res.render("view")
})
    // View To-Do

    module.exports = router;