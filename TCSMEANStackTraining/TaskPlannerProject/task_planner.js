let http = require("http");
let url = require("url");
let port = 9090;
let tasks = new Array();
let taskForm = `
    <h1>Task Planner Page</h1>
    <h2>Create New Task Here</h2>
    <form action="/store" method="">
        <label> Employee ID </label>
        <input type="text" name="eid"/><br/>
        <label> Task ID</label>
        <input type="text" name="tid"/><br/>
        <label> Task Description</label>
        <input type="text" name="taskDescription"/><br/>
        <label> Deadline</label>
        <input type="date" name="deadline"/><br/>
        <input type="submit" value="Save Task"><br/>
        <input type="reset" value = "reset"><br/>


    </form>
    `
let server = http.createServer((req,res)=>{
    if(req.url!="/favicon.ico"){
        console.log(req.url); //console runs correctly here!
        var pathInfo = url.parse(req.url, true).pathname; //Idk what this line does
        res.setHeader("content-type","text/html");
        res.write(taskForm);
        if(true/*req.url=="/store"*/){
            res.write("Log > " + req.url);
            //urlDetails = req.url;
            //let data = url.parse(urlDetails, true).query;
            //console.log("data is " + data);
            //var taskId = data.taskId;
            //console.log("task Id is : " + taskId);
            //take value from URL
            //convert to object
            //store records in object using push
            //convert object back to string
            //store back into JSON using fs module
        }else if(req.url=="/delete"){
            //read from file
            //convert to json
            //check value using iterator loop
            //delete using array method slice & index
            //store in file using fs
            //if task id not available, display error message

        }else if(req.url=="/display"){
            //read from file
            //convert to json
            //create tableData variable using backticks
            /*
            //use a loop to create table rows
            table

            tr 
                td ${variableName} /td
            */
        }
    }
})
server.listen(port,()=>console.log(`running on port number ${port}`));