import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { ReviewComponent } from './review/review.component';
// import { Result1Component } from './quiz/result1/result1.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [{path: "", component: WelcomeComponent},
                        {path: "quiz", component: QuizComponent},
                        {path: "result", component:ResultComponent},
                        {path: "review", component:ReviewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
