import axios from 'axios'
async function makeGetRequest(){
    let res = await axios.get("https://httpbin.org/ip");
    let results = res.data;
    console.log(results);
    /*for (let result of results){
        console.log("%d %s", result.id, result.title);
    }*/
}
makeGetRequest();