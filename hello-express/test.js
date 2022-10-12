
fetch('https://httpbin.org/ip')
.then((response) => response.json())
.then((data) => console.log(data));