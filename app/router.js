var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

const views = __dirname + "/views/pages/";
app.set('view engine', 'ejs'); //define engine views in express



app.get('/', function (req, res) {
  res.render(views + 'index_complete', { title: 'The index page!' })
});


/*
  socket connection for all
*/
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
