import { Injectable } from '@angular/core';
import { AnswerDetails } from './models/answer-details.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  answers: AnswerDetails[] = [];

  constructor() { }

  retrieveAnswers(){
    this.answers = [
      {
        questionNumber: 1,
        answer: "Narendra Modi"
      },
      {
        questionNumber: 2,
        answer: "China"
      }
    ]
    
    return this.answers;
  }
}
