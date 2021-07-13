import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url = "https://opentdb.com/api.php?amount=10"
  // url2 = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
  constructor(private http: HttpClient) { }
  getQuiz(dificulty: string, category: any) {
    return this.http.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${dificulty}&type=multiple`)
  }

  test() {
    return this.http.get(this.url)
  }
}
