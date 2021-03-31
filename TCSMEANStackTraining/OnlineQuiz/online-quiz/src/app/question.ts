/**
 * Question holds   
 * 1- the question to be asked
 * 2- the answer choice descriptions
 * 3- correctAnswer, which is an integer index corresponding to the answers array
 */
export class Question{
    public static startId:number = 0;
    id:number;
    constructor(public questionText:string,public answers:Array<string>, public correctAnswer:number){
        this.id = Question.startId;
        Question.startId ++;
    }
}