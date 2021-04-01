import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css']
})
export class TaskTrackerComponent implements OnInit {
  tasks:Array<Object> = new Array();
  constructor(public taskSer:TaskService) { }

  ngOnInit(): void {
  }
  storeTask(taskRef:any){
    console.log(taskRef);
    this.taskSer.storeTask(taskRef);
  }
  fun(){
    this.loadTasks();
  }
  loadTasks(){
    let data = this.taskSer.loadTasks();
    console.log(" Here is data var ::" + typeof(data));
    //this.tasks = JSON.stringify(this.tasks);
    //this.tasks = JSON.parse(this.tasks);
    console.log("Loaded Tasks" + typeof(this.tasks));
  }
}
