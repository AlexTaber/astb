import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-line-content',
  templateUrl: './line-content.component.html',
  styleUrls: ['./line-content.component.css']
})
export class LineContentComponent implements OnInit {
  displayString = '';

  @Input() content: string;

  @Output() complete = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.updateDisplayString();
  }

  private updateDisplayString() {
    const stringIsComplete = this.displayString.length === this.content.length;
    stringIsComplete ? this.onLineComplete() : this.setUpdatedDisplayString();
  }

  private onLineComplete() {
    this.complete.emit();
  }

  private setUpdatedDisplayString() {
    const stringIndex = this.displayString.length + 1;
    this.displayString = this.content.slice(0, stringIndex);
    setTimeout(() => this.updateDisplayString(), 10);
  }
}
