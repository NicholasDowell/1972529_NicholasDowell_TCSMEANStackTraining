//This javascript file has options for various connections to the Mongo DB
import { MongoClient as mongoClient } from "mongodb";
let url = "mongodb://localhost:27017"; //Default port for mongo db
calls = callData;
console.log(calls);



function addCourse(){
    mongoClient.connect(url,{useUnifiedTopology:true}, (err1,client)=>{
        if (!err1){
            console.log("insert is successfully connected");
            let db = client.db("courseRecords"); //name of database to use
            db.collection("courses").insertOne({ //name of collection to use
                course_id:document.getElementById("cid"),
                courseName:document.getElementById("cName"),
                courseDescription:document.getElementById("cDesc"),
                courseCost:document.getElementById("cost")
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
}

