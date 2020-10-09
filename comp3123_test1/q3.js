let fs = require('fs');
const { Http2ServerRequest } = require('http2');
fs.readFile('/etc/hosts','utf8',function(err,data){
    if (err){
        return console.log(err);
    }
    console.log(data);
});

http.createServer(function(req,res){
    console.log(__dirname + req.url)
fs.readFile(__dirname + req.url,function(err,data){
    if(err){
        res.writehead(404);
        res.end(JSON.stringify(err));
        return;
    }
    else{
        var fs = require('fs');
        var filePath = 'c:/book/discovery.docx'; 
        fs.unlinkSync(filePath);
    }
  
    res.writehead(200);
    res.end(data);
});
}).listen(8081)