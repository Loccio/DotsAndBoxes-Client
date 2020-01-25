const express = require("express");
const app = express();
const path = require('path');
const port = process.env.Port || 5555;

app.listen(port, ()=> console.log('Server listening on port' + port));

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/api/online',(req,res,next)=>{
    res.json({response:true});
})

