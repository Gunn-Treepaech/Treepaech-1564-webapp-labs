import axios from 'axios'
axios.get("https://jsonplaceholder.typicode.com/posts").then(resp => {
    let results = resp.data;
    for (let result of results){
        console.log("%d %s", result.id, result.title);
    }
});