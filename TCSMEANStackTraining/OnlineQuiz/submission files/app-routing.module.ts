import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPageComponent } from './quiz-page/quiz-page.component';

const routes: Routes = [
  {path:"\quiz-page", component:QuizPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
