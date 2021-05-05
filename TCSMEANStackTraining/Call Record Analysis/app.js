

let fs = require("fs");
//Read the JSON file

var calls = new Array();
let fileData = fs.readFileSync('calls.json');
let callData = JSON.parse(fileData);
calls = callData;
console.log(calls);


var mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"; //Default port for mongo db
let x = 2;
let y = calls[0];
let z = calls[0].source
mongoClient.connect(url,{useUnifiedTopology:true}, (err1,client)=>{
    if (!err1){
        console.log("insert is successfully connected");
        let db = client.db("callRecords");
        for(let i = 0; i < calls.length; i ++){
            db.collection("calls").insertOne({
                source:calls[i].source,
                destination:calls[i].destination,
                source_location:calls[i].source_location,
                destination_location:calls[i].destination_location,
                call_duration:calls[i].call_duration,
                roaming:calls[i].roaming,
                call_charge:calls[i].call_charge,
                },(err2,result)=>{
                    if(!err2){
                        console.log(result.insertedCount);
                    }else{
                        console.log(err2);
                    }
                client.close();
            });
            }
        
    }
})
