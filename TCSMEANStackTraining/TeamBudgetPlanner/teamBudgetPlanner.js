var projects =[]

function saveInfoToSession(){
    //1 - read the data from the form
    var newProject = getFormData();
    console.log("Got Form Data " + newProject.clientName + newProject.projectName + newProject.budget);
    //2 - Get the saved info from session
    retrieveFromSession();
    //3 add current item to the list
    if (!projects){
        projects = []
    }
    projects.push(newProject);
    /*
    console.log("Type of projects " + typeof(projects));
    for(var i = 0; i < projects.length;i++){
        console.log(projects[i].clientName)
    }
    */
    //4 - store the updated list into session storage
    storeInSession();
    console.log()
    emptyInputs();
    
}
function getFormData(){
    var proj = {};
    proj.clientName = document.getElementById("clientName").value;
    proj.projectName = document.getElementById("projectName").value;
    proj.budget = document.getElementById("budget").value;
    console.log(proj);
    return proj;
}

function retrieveFromSession(){
    var sessionData = JSON.parse(sessionStorage.getItem("projects"));
    //console.log("retrieved object with type " + typeof(sessionData) + "Object Log: " + sessionData[0].clientName);
    if (projects){
        projects = sessionData;
    }
    
}

function storeInSession(){
    var projString = JSON.stringify(projects);
    sessionStorage.setItem("projects", projString);

}

function populateTable(){
    retrieveFromSession();
    var table = document.getElementById("budgetTable");
    var body = table.getElementsByTagName("tbody")[0];
    for(var i = 0; i < projects.length;i++){
        var row = body.insertRow(body.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = projects[i].clientName;
        cell2.innerHTML = projects[i].projectName;
        cell3.innerHTML = projects[i].budget;
    }
    
    console.log(table);
}

function insertNewRecord(data){
    var table = document.getElementById("employeeList");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.name;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;

}

function emptyInputs(){
    document.getElementById("clientName").value="";
    document.getElementById("projectName").value="";
    document.getElementById("budget").value="";
}