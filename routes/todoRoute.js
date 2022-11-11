const router = require('express').Router();

const Todo = require("../models/todo");

router.post('/todo', (req, res) => {
    const {todo} = req.body;

    const newTodo = new Todo({
        todo
    })

    newTodo.save()
    .then(() => {
        console.log("Successfully added todo")
        res.redirect("/")
    })
    // toDo.find({}, (err, toDos) => {
    //     if (err) {
    //         res.status(500).json({
    //             err
    //         });
    //     } else {
    //         res.status(200).json({
    //             message: 'All ToDos',
    //             toDos
    //         });
    //     }
    // });
});


//View Single To-Do
router.get('/todo/:todo_id', (req, res) => {
    const { todo_id } = req.params;
    toDo.findById(todo_id, (err, toDo) => {
            if (err) {
                res.status(500).json({
                    err
                });
            } else {
                res.status(200).json({
                    message: 'To-Do',
                    toDo
                });
            }
        });
    });

    //Update Single To-Do
router.put('/todo/:todo_id', (req, res) => {
    const { todo_id } = req.params;
    const { title, description, createdBy } = req.body;
    toDo.findByIdAndUpdate(todo_id, {
            title: title,
            description: description,
            createdBy: createdBy
        }, (err, toDo) => {
            if (err) {
                res.status(500).json({
                    err
                });
            } else {
                res.status(200).json({
                    message: 'To-Do updated',
                    toDo
                });
            }
        });
    });

    //Remove Single To-Do
router.delete('/todo/:todo_id', (req, res) => {
    const { todo_id } = req.params;
    toDo.findByIdAndDelete(todo_id, (err, toDo) => {
            if (err) {
                res.status(500).json({
                    err
                });
            } else {
                res.status(200).json({
                    message: 'To-Do has been removed',
                    toDo
                });
            }
        });
    });

    //Remove all To-Do
router.delete('/todo', (req, res) => {
    toDo.remove({}, (err, toDo) => {
            if (err) {
                res.status(500).json({
                    err
                });
            } else {
                res