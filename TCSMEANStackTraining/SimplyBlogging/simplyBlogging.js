var blogs =[]

function saveNewBlog(){
    var newBlog = getFormData(); //1 - get the blog data from the form.
    console.log("Got Form Data " + newBlog.title + newBlog.desc + newBlog.imageId);
    retrieveFromLocal(); //2 - Get the saved info from Local Storage
    if (!blogs){ //3 add current item to the list
        blogs = []
    }
    blogs.push(newBlog);
    for(var i = 0; i < blogs.length;i++){
        console.log(blogs[i].title)
    }
    storeInLocal();//4 - store the updated list into Local storage
    emptyInputs();// (5) - clear the fields so the user can add a new entry
    
}
function getFormData(){
    var blog = {};
    blog.title = document.getElementById("title").value;
    blog.desc = document.getElementById("desc").value;
    // Edited line below from |||| blog.imageId = document.getElementById("imageId").value;
    blog.imageId = document.getElementById("imageId").files[0].name;
    //document.getElementById("file-id").files[0].name; 
    console.log(blog);
    return blog;
}

function retrieveFromLocal(){
    var localData = JSON.parse(localStorage.getItem("projects"));
    blogs = localData;
}

function storeInLocal(){
    var blogString = JSON.stringify(blogs);
    localStorage.setItem("projects", blogString);
}


function emptyInputs(){
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("imageId").value = "";
}


function loadUp(){
    retrieveFromLocal();
    //console.log(" Blogs on loadup " + blogs[0].title);
    populateBlogTable();
}

function populateBlogTable(){
    if(!blogs){
        blogs = []
    }
    //retrieveFromLocal();
    //console.log(" Populate : blogs : " + blogs[0].title)
    
    var table = document.createElement('table');
    table.className = "blogBox";
    var titleRow = table.insertRow(0);
    titleRow.className = "articleTitles";
    var textRow = table.insertRow(1);
    textRow.className = "articleText";
    var imageRow = table.insertRow(2);
    
    
    for(var i = 0; i < blogs.length; i++){
        var cell1 = titleRow.insertCell(i);
        cell1.innerHTML = blogs[i].title;
        var cell3 = textRow.insertCell(i);
        cell3.innerHTML = "<img src=" + blogs[i].imageId +" style=\"width: 30vw\">";
        var cell2 = imageRow.insertCell(i);
        cell2.innerHTML = blogs[i].desc;
        
    }
    
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(table);
    

}

