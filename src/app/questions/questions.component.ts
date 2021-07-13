import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private quiz:QuizService) { }

  ngOnInit(): void {
    // this.quiz.getQuiz().subscribe((result) => {
    //   console.log(result)
    // })
  }

}
