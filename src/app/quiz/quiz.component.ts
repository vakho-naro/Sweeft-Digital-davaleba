import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  difficulty = "easy";
  category = "9";
  constructor(private quiz:QuizService) { }

  difficultyHandler(event: any) {
    this.difficulty = event.target.value
    console.log(this.difficulty)
  }
  categoryHandler(event: any) {
    this.category = event.target.value
    console.log(this.category)
  }
  getUrl() {
    this.quiz.getQuiz(this.difficulty, this.category).subscribe((result) => {
      console.log(result)
    })
  }
  ngOnInit(): void {
    // this.quiz.getQuiz(this.difficulty, this.category).subscribe((result) => {
    //   console.log(result)
    // })
    this.quiz.test().subscribe((result) => {
      console.log(result)
    })
  }
  
}
