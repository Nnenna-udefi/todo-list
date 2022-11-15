const router = require('express').Router();

const Todo = require("../models/todo");

router.post('/add/todo', (req, res) => {
    //const { todo } = req.body;
    //const newTodo = new Todo({ todo });

    const {title, description, timestamps} = req.body;
    const newTodo = new Todo ({
        title,
        description,
        timestamps
    })

//save the todo
    newTodo.save()
    .then(() => {
        console.log("Successfully added todo")
        res.redirect("/")
    })

    .catch((err) => console.log(err));
    
});


    //Remove Single To-Do
router.get("/delete/todo/:_id", (req, res) => {
    const {_id} = req.params;
    Todo.findByIdAndRemove({_id})
    .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
    })
    .catch((err) => console.log(err));
});

 

    module.exports = router;
