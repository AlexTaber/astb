import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-line-loader',
  templateUrl: './line-loader.component.html',
  styleUrls: ['./line-loader.component.css']
})
export class LineLoaderComponent implements OnInit {
  curLoaderIndex = 0;

  @Input() loaderIndex: number;

  @Output() complete = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.updateLoaderIndex();
  }

  getLoaderPercentage(): number {
    return Math.round((this.curLoaderIndex / this.loaderIndex) * 100);
  }

  private updateLoaderIndex() {
    const loaderIsComplete = this.curLoaderIndex === this.loaderIndex;
    loaderIsComplete ? this.onLoaderComplete() : this.setUpdatedLoaderIndex();
  }

  private onLoaderComplete() {
    this.complete.emit();
  }

  private setUpdatedLoaderIndex() {
    this.curLoaderIndex ++;
    setTimeout(() => this.updateLoaderIndex(), 10);
  }
}
