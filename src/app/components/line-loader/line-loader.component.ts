import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Line } from '../../models/line';

@Component({
  selector: 'app-line-loader',
  templateUrl: './line-loader.component.html',
  styleUrls: ['./line-loader.component.css']
})
export class LineLoaderComponent implements OnInit {
  curLoaderIndex = 0;

  @Input() line: Line;

  @Output() complete = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.updateLoaderIndex();
  }

  getLoaderPercentage(): number {
    return Math.round((this.curLoaderIndex / this.line.loaderIndex) * 100);
  }

  private updateLoaderIndex() {
    const loaderIsComplete = this.curLoaderIndex === this.line.loaderIndex;
    loaderIsComplete ? this.onLoaderComplete() : this.setUpdatedLoaderIndex();
  }

  private onLoaderComplete() {
    this.complete.emit();
  }

  private setUpdatedLoaderIndex() {
    this.curLoaderIndex ++;
    setTimeout(() => this.updateLoaderIndex(), this.line.timeoutLength);
  }
}
