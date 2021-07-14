import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url = "https://opentdb.com/api.php?amount=11&type=multiple"
  constructor(private http: HttpClient) { }
  getQuiz(dificulty: string, category: any) {
    return this.http.get(`https://opentdb.com/api.php?amount=11&category=${category}&difficulty=${dificulty}&type=multiple`)
  }

  getAny() {
    return this.http.get(this.url)
  }

  getTypeAny(dificulty: string) {
    return this.http.get(`https://opentdb.com/api.php?amount=11&difficulty=${dificulty}`)
  }

  getDifficyltyAny(cat: any) {
    return this.http.get(`https://opentdb.com/api.php?amount=11&category=${cat}`)
  }
}
