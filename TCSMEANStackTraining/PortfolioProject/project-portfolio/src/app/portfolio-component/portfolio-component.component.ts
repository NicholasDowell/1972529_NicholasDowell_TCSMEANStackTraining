import { Component, OnInit } from '@angular/core';
import { Contact } from '../ContactModel';

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio-component.component.html',
  styleUrls: ['./portfolio-component.component.css']
})
export class PortfolioComponentComponent implements OnInit {
  //this.userName - retrieve from sessionStorage
  
  username:string="";
  contacts:Array<Contact>= new Array();
  constructor() { 
    let item = sessionStorage.getItem("info");
    if(typeof(item) == 'string'){
      item = JSON.parse(item).username;
      if(typeof(item) == 'string'){
        this.username = item;
        console.log(typeof(item));
        console.log("Welcome, " + item + " @@@");
      }
      
    }
    
    //MAKE SURE THE USER"S NAME GETS LOADED HERE
  }

  ngOnInit(): void {
    this.loadFromLocal();
  }
  newContact(name:string, phone:string){
    let newContact = new Contact(name, phone);
    this.contacts.push(newContact);
    this.saveToLocal();
  }
  loadFromLocal(){
    let contactsList = localStorage.getItem("contacts");
    console.log("contactsList : " + contactsList);
    
    if (contactsList){
      let clist = JSON.parse(contactsList);
      for (var i = 0; i < clist.length; i ++){
        let name = clist[i].name;
        let phone = clist[i].phone;
        this.contacts.push(new Contact(name, phone));
      };
    }
    
  }
  saveToLocal(){
    localStorage.setItem("contacts", JSON.stringify(this.contacts));
  }
}
