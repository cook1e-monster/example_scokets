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



var clients = [];
io.on('connection', function (socket) {
  socket.iduser = clients.length + 1
  clients.push(socket)

  socket.on('recive', function ( data ) {
    console.log(socket.iduser)
    console.log(data)

    clients.forEach(function( client ){
      if( client.iduser !== socket.iduser ) {
        client.emit( 'send', data )
      }
    })
  })

})
