import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Line } from '../../models/line';

@Component({
  selector: 'app-line-query',
  templateUrl: './line-query.component.html',
  styleUrls: ['./line-query.component.css']
})
export class LineQueryComponent implements OnInit {
  queryValue: string;
  completed = false;
  correctAnswer: boolean;

  @Input() line: Line;

  @Output() correct = new EventEmitter();
  @Output() incorrect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.line.query.response = this.queryValue;
    this.checkAnswer();
    this.completed = true;
  }

  onComplete() {
    this.correctAnswer ? this.correct.emit() : this.incorrect.emit();
  }

  private checkAnswer() {
    const isCorrect = this.line.query.isCorrectAnswer(this.queryValue);
    isCorrect ? this.onCorrectAnswer() : this.onIncorrectAnswer();
  }

  private onCorrectAnswer() {
    this.line.content = `${this.queryValue} --- ${this.line.query.responseOnCorrect}`;
    this.correctAnswer = true;
  }

  private onIncorrectAnswer() {
    this.line.content = `${this.queryValue} --- ${this.line.query.responseOnIncorrect}`;
    this.correctAnswer = false;
  }
}
