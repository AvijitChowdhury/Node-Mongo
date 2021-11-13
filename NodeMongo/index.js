const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
// parse application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {
    const fruit={
        product:'ada',
        price:200,
    }
    res.send(fruit);
});
app.get('/food/banana',(req,res)=>{
    const banana={
        product:'banana',
        quantity:10000,
        price:1000000,
    }
    res.send(banana);
});

const users = ['kamal','jamal','momin','jalava','angad'];
app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    const Id = req.params.id;
    const name = users[Id];
    res.send({Id,name});
});

//POST
app.post('/addUser',(req,res)=>{
    //console.log('req received',req.body);
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);

})

app.listen(3000, () => console.log('listening to port 3000'));