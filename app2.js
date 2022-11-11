const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
// const uri = "mongodb+srv://nene:Anthony123@cluster0.g9voqxs.mongodb.net/test";
// const { MongoClient } = require("mongodb");

mongoose.connect(process.env.dbURL, { dbName: 'todo' }, (err) => {
    if (!err) {
        console.log('Connected to database');
    } else {
        console.log(err);
    }
});
const ToDoSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    createdBy : {type: String},
    // createAt : {type: Date.now}
});
mongoose.model('ToDo', ToDoSchema);
// app.get('/', (req, res) => {
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Establish and verify connection
//     const dbs = client.db("todo-list");
//     const coll = dbs.collection("lists");

//     const rest = await coll.insertOne({"list":"This is my todo-list."});
//         res.end(JSON.stringify(rest));
//       } catch (ex) {
//         console.log("Error: " + ex);
//       } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//       }
//     }
//     run().catch(console.dir);
  
// });
// app.post('/', (req, res) => {
//     const { title, description, createdBy } = req.body;
//     var toDoAdd = new toDo({
//             title: title,
//             description: description,
//             createdBy: createdBy
//         });
//     toDoAdd.save((err, todo) => {
//             if (err) {
//                 res.status(500).json({
//                     err
//                 });
//             } else {
//                 res.status(200).json({
//                     message: 'To-Do has been created',
//                     todo
//                 });
//             }
//         });
//     });

//     //View To-Do
// app.get('/', (req, res) => {
//     toDo.find({}, (err, toDos) => {
//         if (err) {
//             res.status(500).json({
//                 err
//             });
//         } else {
//             res.status(200).json({
//                 message: 'All ToDos',
//                 toDos
//             });
//         }
//     });
// });

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
});
// const polk = require('polka');
// const { MongoClient } = require("mongodb");

// polk()
//   .get('/create', (req, res) => {
//     const cl = new MongoClient("mongodb://localhost:27017");
//     async function run() {
//       try {
//         await cl.connect();
//         const dbs = client.db("todo-list");
//         const coll = dbs.collection("lists");

//         const rest = await coll.insertOne({"quote":"This is my quote."});
//         res.end(JSON.stringify(rest));
//       } catch (ex) {
//         console.log("Error: " + ex);
//       } finally {
//         await cl.close();
//       }
//     }
//     run().catch(console.dir);
//   })
//   .listen(3000, err => {
//     if (err) throw err;
//     console.log(`> localhost:3000`);
//   });

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });