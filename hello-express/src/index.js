import express from 'express'
let app = express()
app.get('/hello', function(req, res){
    res.send('Hello World');
});
app.post('/hello', function(req, res){
    res.send('You just called the method post at /hello');
});
app.listen(3000);