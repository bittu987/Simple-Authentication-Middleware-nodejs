const express = require('express');
// Initialised the Server
const server = express();
const port = 3333;

// Write a middleware function
server.use(express.json());

const log = (req,res,next)=>{
    const timestart = process.hrtime();
    const elapsedHrTime = process.hrtime(timestart);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    console.log([{
        "HTTP method": req.method,
        "requested URL": req.url,
        "timestamp": new Date().toLocaleString(),
        "Time for processing the request": elapsedTimeInMs,
    }]);
    next();
};

server.use(log);
// Below are the API endpoints 

// Post Request 

server.post('/home',(req,res)=>{
    const data = req.body;
    console.log(data);
    res.json({
        "message":"Post API Successful"
    });
});

// Get Request

server.get('/data',(req,res)=>{
    res.json({
        "Message" : 'Get API Successful',
        "Name" : "Bittu"
    });
      
});

server.listen(port,()=> console.log("Server is running at Port no :- 3333"));