let app= require ("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

var mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
var courses = new Array();
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get("/addCourse", (req, res)=>{
    res.sendFile(__dirname+"/addCourse.html");
})
app.get("/deleteCourse", (req, res)=>{
    res.sendFile(__dirname+"/deleteCourse.html");
})
app.get("/updateCourse", (req, res)=>{
    res.sendFile(__dirname+"/updateCourse.html");
})
app.get("/fetchCourses", (req, res)=>{
    res.sendFile(__dirname+"/fetchCourses.html");
})

io.on("connection",(socket)=>{
    console.log("client Connected to application........");

    socket.on("add", (courseId, courseName, courseDescription, courseCost)=>{
        console.log("add function called from server")
        mongoClient.connect(url,{useUnifiedTopology:true}, (err1,client)=>{
            if (!err1){
                console.log("insert is successfully connected");
                let db = client.db("courseRecords"); //name of database to use
                db.collection("courses").insertOne({ //name of collection to use
                    course_id:courseId,
                    courseName:courseName,
                    courseDescription:courseDescription,
                    courseCost:courseCost
                    },(err2,result)=>{
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
    socket.on("delete", (cid)=>{
        mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
            if(!err1){
                let db = client.db("courseRecords");
                db.collection("courses").deleteOne({course_id:"CS 156"},(err2,result)=> {
                    if(!err2){
                           if(result.deletedCount>0){
                                console.log("Record deleted successfully")
                           }else {
                                console.log("Record not present")
                           }
        
                    }
                    client.close();
                })           
            }
        })
    })
    socket.on("update", (cid, cost)=>{
        mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
            if(!err1){
                let db = client.db("courseRecords");
                db.collection("courses").updateOne({course_id:cid},{$set:{courseCost:cost}},(err2,result)=> {
                    if(!err2){
                           if(result.modifiedCount>0){
                                console.log("Record updated successfully")
                           }else {
                                console.log("Record didn't update");
                           }
                    }
                    client.close();
                })           
            }
        })
        
    })
    socket.on("fetch", ()=>{
        courses = [];
        mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
            if(!err1){
                let db = client.db("courseRecords");
                let cursor = db.collection("courses").find(); 
                //courses = db.collection("courses").find().toArray();
                    cursor.each((err2,doc)=> {
                        if(doc!=null){
                            console.log("id is "+doc.course_id+", Course Name is "+doc.courseName + ", Description:  " + doc.courseDescription + ", Course Cost is : " + doc.courseCost);
                            courses.push({
                                course_id:doc.course_id,
                                courseName:doc.courseName,
                                courseDescription:doc.courseDescription,
                                courseCost:doc.courseCost
                            });
                            console.log("courses length " + courses.length );
                        }
                        client.close();
                    })
            }
        })
        socket.emit("gotItems", courses);
    })
    socket.on("sampleAction",(msg)=>{
        console.log(msg);
        socket.emit("sampleResponse", "Hello SocketResponse!");
    })
    socket.on("greet", (uname, utext)=>{
        console.log("Hello, " + uname);
        console.log("Your Message is: " + utext);
        
    })
})
http.listen(9090,()=>console.log("Server running on port number 9090"));

