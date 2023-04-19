const app = require('express')();

app.get('/', (req, res) => {
    console.log("get")
    res.send("hello world!!!")
});


app.listen(3000);