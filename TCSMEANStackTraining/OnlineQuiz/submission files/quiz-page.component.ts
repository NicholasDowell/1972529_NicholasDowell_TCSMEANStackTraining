import { Component, OnInit } from '@angular/core';
import { Question } from '../question'

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  questions:Array<Question> = new Array();
  score:number = 0;
  percentage:string = "";
  pass:boolean=false;
  submitted:boolean=false;
  incorrectQuestions:string="";
  correctQuestions:string="";
  constructor() { }

  ngOnInit(): void {
    console.log("quiz questions created")
    this.questions=this.getSampleQuesitons();
    console.log(this.questions);
  }
  /**
   * 
   * @returns a hard-coded set of sample Question objects.
   */
  getSampleQuesitons():Array<Question>{
    var newQuestions = new Array<Question>();
    for (let i = 0; i < 10; i++){
      var newText = "   What is the square root of 10? (Round to the nearest 3 places)";
      var newAnswers = Array<string>();
      newAnswers.push( (5 * i + 2).toString() + "." + i + "328");
      newAnswers.push( (i / 5).toString());
      newAnswers.push( "3.162");
      newAnswers.push( (((5*i)**2)/3.142).toString());
      newAnswers.push("None of the above")
      var correctAnswer = 2;
      var newQ = new Question(newText, newAnswers, correctAnswer);
      newQuestions.push(newQ);console.log("created new Question " + newQ.questionText + newQ.correctAnswer);
    }
    return newQuestions;
  }
  checkScore(){
    this.submitted=true;
    this.score=0;
    //For each Question:
      //Is the correct box ticked?
        //if yes, score ++
      for(let i = 0; i < this.questions.length; i ++){
        let correct = this.questions[i].correctAnswer;
        //let tester = document.getElementsByName("0")[0].id;
        //console.log("tester " + tester);
        let radio = document.getElementById(i.toString()+correct.toString()) as HTMLInputElement;
        if (radio){
          if(radio.checked){
            this.score++;
            this.correctQuestions+= (this.questions[i].id + 1).toString() + ", ";
          }
          else this.incorrectQuestions+= (this.questions[i].id + 1).toString() + ", ";
          var rid = radio.id;
          let che = radio.checked;
          console.log(radio + rid + che);
        }
      }

      this.percentage = ((this.score / this.questions.length)*100).toString() + "%";
      if(this.score/this.questions.length > .75){
        this.pass=true;
      }
      console.log("Score : " + this.score + "/" + this.questions.length)
  }
  hideScore(){
    this.submitted=false;
    this.incorrectQuestions="";
    this.correctQuestions="";
  }

}
