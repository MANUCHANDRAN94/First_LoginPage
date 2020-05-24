const http=require('http')
const path= require('path')
const express = require('express');

const app = express();
app.use(express.static('public'))

app.listen(5056, () => {
    console.log('Express intro running on localhost:2000');
  });
  app.get('/', function(req, res){
      res.sendFile('index.html')
  // res.sendFile(path.join(__dirname, './login.html'));
});