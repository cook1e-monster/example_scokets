var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var $ = require('jquery');


server.listen(3000);

const views = __dirname + "/views/pages/";
app.set('view engine', 'ejs'); //define engine views in express



app.get('/', function (req, res) {
  res.render(views + 'index_complete', { title: 'The index page!' })
});


//sockets
io.on('connection', function (socket) {
  socket.emit('send', { hello: 'world' }); //send data client
  socket.on('recive', function (data) { console.log(data); }); //recive data client
});
