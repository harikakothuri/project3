import { Component, OnInit } from '@angular/core';
import { AnswerDetails } from '../models/answer-details.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private sub: any;
  selectedAnswersList: any;
  answersList: AnswerDetails[];
  score: number = 0;
  
  constructor(private route: ActivatedRoute,
              private answerService: ResultService,
              private router: Router) { }

  ngOnInit(): void {
    
    // To retrieve answers json data.
    this.answersList = this.answerService.retrieveAnswers();
    
    // To recieve the selectedAnswersList array.
    this.sub = this.route.params.subscribe(params => {
      this.selectedAnswersList = params;
    });
    // console.log(this.selectedAnswersList);
    
    // To calculate the score.
    for(let i=0; i<this.answersList.length; i++ ){
      if(this.selectedAnswersList[i] == this.answersList[i].answer){
        this.score++;
      }
    }
    // console.log(this.score);
  }
}
