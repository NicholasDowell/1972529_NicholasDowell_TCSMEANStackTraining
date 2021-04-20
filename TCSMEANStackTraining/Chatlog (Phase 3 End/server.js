let app= require ("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

var mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=>{
    console.log("client Connected to application........");

    socket.on("sampleAction",(msg)=>{
        console.log(msg);
    })
    socket.on("greet", (uname, utext)=>{
        console.log("Hello, " + uname);
        console.log("Your Message is: " + utext);
        
    })
    socket.on("logchat", (userName, logMessage)=>{
        console.log("Added new item to database : " + userName + " , " + logMessage);
        mongoClient.connect(url,{useUnifiedTopology:true}, (err1,client)=>{
            if (!err1){
                console.log("insert is successfully connected");
                let db = client.db("meanstack");
                db.collection("serverchat").insertOne({uname:userName,message:logMessage},(err2,result)=>{
                    if(!err2){
                        console.log(result.insertedCount);
                    }else{
                        console.log(err2);
                    }
                    client.close();
                });
            }
        })
    })
})
http.listen(9090,()=>console.log("Server running on port number 9090"));

