import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() public questions: any;
  @Output() resetTest = new EventEmitter()

  num = 0;
  selectedAnswer = '';
  score = 0;
  reset = true;
  shuffle = 0;
  shuffleDiv = 0;
  color:any = 0;
  defColor = '#6c9eaa';
  disable = true;

  constructor() { }

  ngOnInit(): void {
  //  this.resetTest.emit('true')
  }

  radioHandler(event: any) {
    this.selectedAnswer = event.target.value;
  }

  getAnswer() {
    this.num++;
    this.shuffle = Math.floor(Math.random() * 2);
    this.shuffleDiv = Math.floor(Math.random() * 2);
    if(this.selectedAnswer == 'correct') {
      this.score++
    }
    this.color = '';
    this.disable = true;
    if(this.num >= 10){
      this.reset = false;
    }
  }

  selectAnswer(number: any) {
    this.color = number;
    this.disable = false
  }

  resetQuiz() {
    this.resetTest.emit('true');
  }

}
