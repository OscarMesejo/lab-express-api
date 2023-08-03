const express = require ('express');

const data = require('../data.json')

const app = express();

app.get("/api", (req, res)=>{
    res.send('Let check it in Thunder');
})

app.get("/api/all", (req, res)=>{
    res.send(data);
})

app.get("/api/random", (req, res)=>{
   const randomData = Math.floor(Math.random() * data.dragQueens.length)

   res.send(data.dragQueens[randomData])
});

app.get("/api/:id", (req, res)=>{
    const id = parseInt(req.params.id); //This is to convert a string in a number
    const randomDragQueen = data.dragQueens.find(item => item.id === id);
    res.send([randomDragQueen]);
    
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));