const express = require('express');
const app = express();
const port = 7373;

app.listen(port, (req, res) =>{
    console.log('App listning at Port : ' + port);
    
})