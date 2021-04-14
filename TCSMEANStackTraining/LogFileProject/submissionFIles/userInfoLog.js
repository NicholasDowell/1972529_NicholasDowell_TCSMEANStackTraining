let obj= require("readline-sync");
let fs = require("fs");

let data = fs.readFileSync("log.json");
let jsonString = data.toString();
let peopleList = JSON.parse(jsonString);
debugger;

let fname = obj.question("enter your first name: ");
let lname = obj.question("enter your last name: ");
let gender = obj.question("enter you gender: ");
let email = obj.question("enter your email address: ");
debugger;
let person = {"fname":fname,"lname":lname,"gender":gender,"email":email};
person.dateLogged = Date().toString();
debugger;
peopleList.push(person);
speople = JSON.stringify(peopleList);
fs.writeFileSync("log.json", speople);
