import axios from 'axios';
let access_token = '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';
axios.get ('https://api.github.com/user', {
    headers: {
           'Authorization': `token ${access_token}`
    }
})
.then((res) => {
    //console.log(res.data);
    let data = res.data
    console.log("GitHub user name is %s who lives in %s", data.name, data.location);
})
.catch((error) => {
    console.error(error)
})