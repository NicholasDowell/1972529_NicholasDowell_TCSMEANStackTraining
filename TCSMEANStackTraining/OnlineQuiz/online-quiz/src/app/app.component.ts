import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quizButton:boolean = true;
  title = 'online-quiz';

  hideQuizButton(){
    this.quizButton = false;
    
  }
}
