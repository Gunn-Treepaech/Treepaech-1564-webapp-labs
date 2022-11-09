import express from 'express';
import fs from 'fs';
import path from 'path';

let app = express();
let athlete = {
    "name": "Treepaech Treechan",
    "sport":"Tennis"
}

app.get('/', function(req, res){
    res.sendFile('web.html', { root: '.' })
});

app.get('/athletes', function(req, res){
    fs.readFile("athletes.json","utf8", function(err, data){
        console.log(data);
        res.set('Content-Type', 'application/json')
        res.end(data);
    })
});

app.get('/athletes/:sport', function(req, res){
    fs.readFile("athletes.json","utf8", function(err, data){
        let datas = JSON.parse(data);
        let result = [];
        //console.log(req.params.sport);
        for (let datau in datas){
            if (datas[datau].sport.toLowerCase() == req.params.sport.toLowerCase()){
                result.push(datas[datau]);
            }
        }
        if (result.length == 0){
            let nullBody = {
                "message" : "Not Found"
            };
            res.set('Content-Type', 'application/json')
            res.end(JSON.stringify(nullBody));
        } else {
            //console.log(datas);
            res.set('Content-Type', 'application/json')
            res.end(JSON.stringify(result));
        }
    })
});

app.delete('/athletes/delete/:name', function(req, res){
    fs.readFile("athletes.json","utf8", function(err, data){
        let datas = JSON.parse(data);
        let result = [];
        console.log(req.params.name);
        for (let datau in datas){
            if (datas[datau].name.toLowerCase() != req.params.name.toLowerCase()){
                result.push(datas[datau]);
            }
        }
        console.log(result);
        res.set('Content-Type', 'application/json')
        res.end(JSON.stringify(result));
        fs.writeFile('athletes.json', JSON.stringify(result), function(err){
            if(err) throw err;
        })
    });
});

app.post('/athletes/add', function(req, res){
    res.sendFile('web.html', { root: '.' })
    fs.readFile("athletes.json","utf8", function(err, data){
       let parsedData = JSON.parse(data);
       parsedData.push(athlete);
       console.log( parsedData);
       res.set('Content-Type', 'application/json')
       res.end(JSON.stringify(parsedData));
       fs.writeFile('athletes.json', JSON.stringify(parsedData),function(err){
        if(err) throw err;
       })
    })
});

let sever = app.listen(8081, function(){
    let port = sever.address().port
    console.log(`Running on ${port}`);
});