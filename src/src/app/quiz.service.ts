import { Injectable } from '@angular/core';
import { QuestionDetails } from './models/question-details.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions: QuestionDetails[] = [];
  
  constructor() { }

  retrieveQuestions(){
    this.questions = [
      {
        questionNumber: 1,
        question: "Who is our Prime Minister?",
        options: ["Narendra Modi", "Rahul Gandhi", "Obama", "Trump"] 
      },
      {
        questionNumber: 2,
        question: "Where was COVID-19 first identified?",
        options: ["Dubai", "China", "South Africa", "Pakistan"]
      }
    ]
    
    return this.questions;
  }
}
