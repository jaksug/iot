const express = require('express');
const app = express();
var io = require('socket.io').listen(8090);
 
//route untuk halaman home
app.get('/',(req, res) => {
    res.sendFile('public/index.html');
});
 
//route untuk halaman about
app.get('/about',(req, res) => {
  res.send('This is about page');
});
 
app.listen(9000, () => {
  console.log('Server is running at port 8000');
});