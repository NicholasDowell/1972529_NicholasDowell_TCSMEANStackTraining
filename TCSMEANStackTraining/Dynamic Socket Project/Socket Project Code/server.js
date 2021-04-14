var app = require("express")(); //express module
//loading express and creating the reference in ws  (Web Socket)
var ws = require("express-ws")(app);

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.ws("/",(socket, res)=>{
    socket.send("message from Server");
})
app.ws("open"),(data)=>{
    console.log("data".toString())
}
app.listen(9090, ()=>{console.log("Web Socket running on port number 9090")})