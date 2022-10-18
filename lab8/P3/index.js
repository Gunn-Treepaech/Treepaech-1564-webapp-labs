import express from "express";
import axios from 'axios';

let app = express();
app.get("/ip", function (req, res) {
    axios.get("https://httpbin.org/ip").then(resp => {
        let results = resp.data.origin;
        console.log(results);
        let newBody = {
            "ip": results
        };
        res.set('Content-Type', 'application/json')
        res.end(JSON.stringify(newBody));
    });
});

let sever = app.listen(8082, function () {
  let port = sever.address().port;
  console.log(`Running on ${port}`);
});
