const http = require('http')
const server = http.createServer((req, res)=>
{
    res.end(' My first simple web server');
});
server.listen(4000, ()=>
{
    console.log('server started at port 4000')
});