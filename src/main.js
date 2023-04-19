const app = require('express')();
const path = require('path')

app.get('/', (req, res) => {
    console.log("get")
    // res.send("hello world!!!")
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(3000);