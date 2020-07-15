import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerDetails } from 'src/app/models/answer-details.model';
import { ResultService } from 'src/app/result.service';

@Component({
  selector: 'app-result1',
  templateUrl: './result1.component.html',
  styleUrls: ['./result1.component.css']
})
export class Result1Component implements OnInit {
  private sub: any;
  selectedAnswersList: any;
  answersList: AnswerDetails[];
  score: number = 0;

  // @Input() comingData;
  // @Input("comingData") answersList: any;
  
  constructor(private route: ActivatedRoute,
              private answerService: ResultService,
              private router: Router) { }

  ngOnInit(): void {
    
    // To retrieve answers json data.
    // this.answersList = this.answerService.retrieveAnswers();
    
    // To recieve the selectedAnswersList array.
    // this.sub = this.route.params.subscribe(params => {
    //   this.selectedAnswersList = params;
    // });
    // console.log(this.selectedAnswersList);
    
    // To calculate the score.
    // for(let i=0; i<this.answersList.length; i++ ){
    //   if(this.selectedAnswersList[i+1] == this.answersList[i].answer){
    //     this.score++;
    //   }
    // }
    // console.log(this.score);
  }

  reviewFunc(){
    // this.router.navigate(['/review',this.selectedAnswersList, this.answersList]);
  }
}
