import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QuizService } from '../quiz.service';
import { QuestionDetails } from '../models/question-details.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questionsList: QuestionDetails[];
  public selectedAnswers: string[]=[];
  name: any;
  
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.paramMap.get('key');
    // console.log(this.name);
    

    this.questionsList = this.quizService.retrieveQuestions();
  }

  onItemChange(option: string, questionNumber: number){
    // console.log(questionNumber + " - " +option);
    // this.selectedAnswers[0] = "dummyData";
    this.selectedAnswers[questionNumber-1] = option;

  }
  
  sendAnswers(){
    // console.log(this.selectedAnswers);

  }
}
