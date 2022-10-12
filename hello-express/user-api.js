import express from 'express';
import fs from 'fs';

let app = express();
let user = {"user4": {
    "name": "piti",
    "profession":"priest",
    "hobbies":"meditation",
    "id":4
}}

app.get('/list-user', function(req, res){
    fs.readFile("hello-express/user.json","utf8", function(err, data){
        console.log(data);
        res.set('Content-Type', 'application/json')
        res.end(data);
    })
});

app.get('/id/:id', function(req, res){
    fs.readFile("hello-express/user.json","utf8", function(err, data){
        let users = JSON.parse(data);
        let user = users["user" + req.params.id];
        console.log(user);
        res.set('Content-Type', 'application/json')
        res.end(JSON.stringify(user));
    })
});

app.delete('/id/:id', function(req, res){
    fs.readFile("hello-express/user.json","utf8", function(err, data){
        let users = JSON.parse(data);
        delete users["user" + req.params.id];
        console.log(users);
        res.set('Content-Type', 'application/json')
        res.end(JSON.stringify(users));
        fs.writeFile('hello-express/user.json', JSON.stringify(user), function(err){
            if(err) throw err;
        })
    });
});

app.post('/add-user', function(req, res){
    fs.readFile("hello-express/user.json","utf8", function(err, data){
       let parsedData = JSON.parse(data);
       parsedData["user4"] = user["user4"];
       console.log(parsedData);
       res.set('Content-Type', 'application/json')
       res.end(JSON.stringify(parsedData));
       fs.writeFile('hello-express/user.json', JSON.stringify(parsedData),function(err){
        if(err) throw err;
       })
    })
});

let sever = app.listen(8081, function(){
    let port = sever.address().port
    console.log(`Running on ${port}`);
});