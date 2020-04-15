const express = require("express");
const app = express();
const http = require('http');
const path = require('path');
const port = process.env.Port || 5555;
const socketio = require('socket.io');
const {playerCreate,getPlayer,playerRemove,findSecond} = require('./players');



app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/api/online',(req,res,next)=>{
    res.json({response:true});
})

const server = http.createServer(app);

io = socketio(server);
io.on('connection', socket => {

  socket.on('joinRoom',({username,room}) => {

  const player = playerCreate(username,room,socket.id);

  if(player)
  {
    socket.join(player.room);
    socket.emit('join',true);

    socket.emit('message', {
    user:null,
    text:'Welcome to the room, '+player.username});

    socket.broadcast.to(player.room).emit('message',  {
    user:null,
    text:player.username+' '+'has joined the room'});

    const secondplayer = findSecond(player.room,player.id);
    console.log(secondplayer); 
    if(secondplayer)
    {
      const thisplayer = player.username;
      

      socket.emit('secondplayer',secondplayer.username);

      socket.broadcast.to(player.room).emit('secondplayer',thisplayer);

      socket.broadcast.to(player.room).emit('startgame');
      
    }
  }
  else
  {
    socket.emit('join',false);
  }
  }
  );




  socket.on('disconnect', ()=>
  {
    const player = getPlayer(socket.id);
    if(player)
    {
      io.to(player.room).emit('message',
      {
      user:null,
      text:player.username+' has left the room'});
      io.to(player.room).emit('secondplayerout');
      playerRemove(socket.id);
    }
  }
  );

  socket.on('message', (msg)=>
  {
    const player = getPlayer(socket.id);
    io.to(player.room).emit('message',msg);
  });

  socket.on('drawline', (id)=>
  {
    const player = getPlayer(socket.id);
    socket.broadcast.to(player.room).emit('drawline',id);

  });

  socket.on('playagain', (id)=>
  {
    const player = getPlayer(socket.id);
    socket.broadcast.to(player.room).emit('playagain');

  });

  socket.on('reqaccepted', ()=>
  {
    const player = getPlayer(socket.id);
    socket.broadcast.to(player.room).emit('startgame');
    
  });

})

server.listen(port, ()=> console.log('Server listening on port' + port));