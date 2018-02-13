import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Line } from '../../models/line';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  displayString = '';

  @Input() line: Line;

  @Output() complete = new EventEmitter();
  @Output() incorrect = new EventEmitter();
  @Output() correct = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onComplete() {
    this.complete.emit();
  }

  onCorrectAnswer() {
    this.correct.emit();
  }

  onIncorrectAnswer() {
    this.incorrect.emit();
  }
}
