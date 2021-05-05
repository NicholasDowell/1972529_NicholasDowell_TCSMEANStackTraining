let http = require("http");
let url = require("url");
let fs = require("fs");
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
    <h2>Delete Task by ID</h2>
    <form action="/delete" method="">
        <label> Task ID</label>
        <input type="text" name="delete_tid"/><br/>
        <input type="submit" value="Delete Task"><br/>
        <input type="reset" value = "reset"><br/>


    </form>
    <h2> Task List </h2>
    <form action="/display" method="">
        <input type="submit" value="List All Tasks"><br/>
    </form>
    `
let server = http.createServer((req,res)=>{
    if(req.url!="/favicon.ico"){
        console.log(req.url); //console runs correctly here!
        var pathInfo = url.parse(req.url, true).pathname; //Takes the URL into a string
        console.log("pathInfo is : " + pathInfo);
        res.setHeader("content-type","text/html");
        res.write(taskForm);  //puts the HTML onto the page
        if(pathInfo=="/store"){
            let fileData = fs.readFileSync('tasks.json');
            let taskData = JSON.parse(fileData);
            tasks = taskData;
            //console.log("Loaded Date From File : " + tasks[0].eid);
            //res.write("Log > " + req.url);
            urlDetails = req.url;
            let data = url.parse(urlDetails, true).query;
            console.log("data.eid is " + data.eid);
            var tid = data.tid;
            console.log("task Id is : " + tid);
            console.log("task desc : " + data.taskDescription);
            console.log("deadline is : " + data.deadline);
            var newTask = {
                    eid:data.eid,
                    tid:data.tid,
                    taskDescription:data.taskDescription,
                    deadline:data.deadline
            }
            console.log("newTask is : " + newTask.eid);
            tasks.push(newTask);
            stringTasks = JSON.stringify(tasks);
            console.log("stringTask : " + stringTasks);
            fs.writeFileSync('tasks.json', stringTasks);
            //store back into JSON using fs module

        }else if(pathInfo=="/delete"){
            let fileData = fs.readFileSync('tasks.json');
            let taskData = JSON.parse(fileData);
            tasks = taskData;
            urlDetails = req.url;
            let data = url.parse(urlDetails, true).query;
            let task_id_to_delete = data.delete_tid; //get task ID from the form
            console.log("task ID from form : " + task_id_to_delete);
            let deletedCount = 0;
            for(let i = 0; i < tasks.length; i ++){
                console.log("taskId at i :"  + tasks[i].tid);
                if (tasks[i].tid == task_id_to_delete){
                    console.log("Found task to delete at index : " + i);
                    tasks.splice(i, 1);
                    deletedCount ++;
                }
            }
            if (deletedCount == 0){ //check whether any are deleted
                res.write("Task not found - not deleted");
            }
            stringTasks = JSON.stringify(tasks);
            console.log("stringTask : " + stringTasks);
            fs.writeFileSync('tasks.json', stringTasks);
            

        }else if(pathInfo=="/display"){
            let fileData = fs.readFileSync('tasks.json');
            let taskData = JSON.parse(fileData);
            tasks = taskData;
            urlDetails = req.url;
            let data = url.parse(urlDetails, true).query;
            
            let tableString = "";
            tableString += `
                <table id="taskTable" border="1px">
                    <tr>
                        <th>emp id</th>
                        <th>task id</th>
                        <th>task name</th>
                        <th>deadline</th>
                    </tr>`;
            for(let i = 0; i < tasks.length; i ++){
                tableString += 
                `
                <tr>
                    <td>${tasks[i].eid}</td>
                    <td>${tasks[i].tid}</td>
                    <td>${tasks[i].taskDescription}</td>
                    <td>${tasks[i].deadline}</td>
                </tr>
                `
            }
            tableString += `</table>`
            res.write(tableString);
        }
    }
})
server.listen(port,()=>console.log(`running on port number ${port}`));