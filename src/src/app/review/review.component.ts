import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  
  sub: any;
  selectedAnswersList: any;
  answersList: any;
  answers: any;

  constructor(private route: ActivatedRoute,
              private answerService: ResultService) { }

  ngOnInit(): void {

    this.answersList = this.answerService.retrieveAnswers();
    console.log(this.answersList);
    
    this.sub = this.route.params.subscribe(params => {
      this.answers = params;
    });
    this.selectedAnswersList = this.answers;
    console.log(this.selectedAnswersList);
    
  }

}
