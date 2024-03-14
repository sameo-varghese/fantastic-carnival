const express = require("express");
// const morgan = require("morgan");
const app = new express();
// app.use(morgan('dev'));

app.use(express.json());


let tasks =[];
app.get('/',(req,res)=>{
    res.json(tasks);
})
app.get('/tasks/:id',(req,res)=>{
    const id = req.params.id;
//console.log(id);
    const task = tasks.find(task=>task.id===id);
    if(!task){
        res.send("Task not found");
    }else{
        res.json(task)
    }
})


app.post('/tasks',(req,res)=>{
    const task=req.body;
    tasks.push(task);
    res.send({message:"Task added",tasks})
})

app.put('/tasks/:id',(req,res)=>{
    const id = req.params.id;
    const updateTask=req.body;
    const index = tasks.findIndex((task)=>task.id===id);
    if(index===-1){
        res.send("Task not found");}
        else{
            tasks.splice(index,1,updateTask)
            res.json(tasks);
        }

})

app.delete('/tasksdel/:id',(req,res)=>{
    const id = req.params.id;
  
    const index = tasks.findIndex((task)=>task.id===id);
    if(index===-1){
        res.send("Task not found");}
        else{
            tasks.splice(index,1)
            res.json(tasks);
        }
})
app.listen(3000,(req,res)=>{
    console.log("Welcome to localhost 3000");
})