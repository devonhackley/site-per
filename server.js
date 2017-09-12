'use strict';
require('dotenv').load();

const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static(`${__dirname}/build`));

app.get('*',function(req,res){
  res.sendFile('index.html', {root: `${__dirname}/build`});
});

app.listen(PORT, function(){
  console.log('Server running on port: ' + PORT);
})
