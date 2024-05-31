const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000,()=>console.log("Server is running on port 3000"));
let task = [];

app.get('/task',(req,res)=>{
    res.json(task);
});

app.post ('/task', (req, res) =>{
    const {tarea} = req.body;
    if(!tarea){
        res.status(400).json({error: "Debes enviar una tarea"});
        return;
    }
    const newTask ={
        id: task.length + 1,
        tarea: tarea,
        completado: false
    };
    task.push(newTask);
    res.status(201).json(newTask);
});
