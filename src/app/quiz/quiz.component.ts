import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  display = true;
  difficulty = "any";
  category = "any";
  questionData: any = ''
  constructor(private quiz:QuizService) { }

  difficultyHandler(event: any) {
    this.difficulty = event.target.value
  }
  categoryHandler(event: any) {
    this.category = event.target.value
  }
  getUrl() {
     if(this.category == "any" && this.difficulty == "any") {
      this.quiz.getAny().subscribe((result) => {
        this.questionData = result;
        this.display = false
      })
    }else if(this.difficulty == "any") {
      this.quiz.getDifficyltyAny(this.category).subscribe((result) => {
        this.questionData = result;
        this.display = false
      })
    } else if(this.category == "any") {
      this.quiz.getTypeAny(this.difficulty).subscribe((result) => {
        this.questionData = result;
        this.display = false
      })
    } else {
      this.quiz.getQuiz(this.difficulty, this.category).subscribe((result) => {
        this.questionData = result;
        this.display = false
      })
    }
    
  }
  
  ngOnInit(): void {
    
  }
  resetQuiz(event: any) {
    return this.display = event
  }
  
}
