const router = require('express').Router();

const Todo = require("../models/todo");

router.post('/add/todo', (req, res) => {
    // const {_id, title, description, timestamp} = req.body;
const {todo} = req.body;
    const newTodo = new Todo({
        todo
//         : {
//    //_id: _id,
//    title: title,
//    description: description,
//    timestamp: timestamp
//         }
     
     });

    newTodo.save()
    .then(() => {
        console.log("Successfully added todo")
        res.redirect("/")
    })

    .catch((err) => console.log(err));
    
});


//View Single To-Do
// router.get('/add/todo/:todo_id', (req, res) => {
//     const { todo_id } = req.params;
//     Todo.findById(todo_id, (err, Todo) => {
//             if (err) {
//                 res.status(500).json({
//                     err
//                 });
//             } else {
//                 res.status(200).json({
//                     message: 'To-Do',
//                     Todo
//                 });
//             }
//         });
//     });

    //Update Single To-Do
// router.put('/todo/:todo_id', (req, res) => {
//     const { todo_id } = req.params;
//     const { title, description, createdBy } = req.body;
//     Todo.findByIdAndUpdate(todo_id, {
//             title: title,
//             description: description,
//             createdBy: createdBy
//         }, (err, Todo) => {
//             if (err) {
//                 res.status(500).json({
//                     err
//                 });
//             } else {
//                 res.status(200).json({
//                     message: 'To-Do updated',
//                     Todo
//                 });
//             }
//         });
//     });

    //Remove Single To-Do
router.get("/delete/todo/:_id", (req, res) => {
    const {_id} = req.params;
    Todo.findByIdAndRemove({_id})
    .ten(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
    })
    .catch((err) => console.log(err));
});

    //Remove all To-Do
// router.delete('/todo', (req, res) => {
//    Todo.remove({}, (err,Todo) => {
//             if (err) {
//                 res.status(500).json({
//                     err
//                 });
//             } else {
//                 res.status(200).json({
//                     message: 'All To-Do has been removed',
//                    Todo
//                 });
//             }
//         });
//     });

    module.exports = router;
