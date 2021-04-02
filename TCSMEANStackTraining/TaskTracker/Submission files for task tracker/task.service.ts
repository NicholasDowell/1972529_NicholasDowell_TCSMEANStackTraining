import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(public http:HttpClient) {

   }
   storeTask(task:any){
      this.http.post("http://localhost:3000/tasks", task).
      subscribe(result=>console.log(result), error=>console.log(error));
  }
  loadTasks(){
    var obj = this.http.get("http://localhost:3000/tasks").
    subscribe(result=>console.log(result), error=>console.log(error));
    console.log("Service: " + (obj));
    return obj;
  }
  
}
