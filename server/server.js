const express = require("express");
const app = express();
const path = require('path');
const port = 5555;

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/api/online',(req,res,next)=>{
    res.json({response:true});
})

app.listen(port, ()=> console.log("Server listening on port " + port));