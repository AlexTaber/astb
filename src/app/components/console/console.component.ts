import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConsoleService } from '../../services/console.service';
import { HackingConsole } from '../../models/hacking-console';
import { Line } from '../../models/line';
import { LineQuery } from '../../models/line-query';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  hackingConsole: HackingConsole;
  curLineIndex = 0;

  @Output() celebrate = new EventEmitter();

  constructor(
    private _consoleService: ConsoleService
  ) { }

  ngOnInit() {
    this.hackingConsole = this._consoleService.getConsole();
  }

  canRenderLine(index: number) {
    return index <= this.curLineIndex;
  }

  onLineComplete() {
    this.curLineIndex ++;
  }

  onCorrectAnswer(line: Line) {
    const isValentinesAnswer = line.query.value === 'valentines';
    isValentinesAnswer ? this.checkValentinesAnswer(line.query) : this.onLineComplete();
  }

  onIncorrectLine(line: Line) {
    this.hackingConsole.insertLine(line, this.curLineIndex + 1);
    this.onLineComplete();
  }

  private checkValentinesAnswer(query: LineQuery) {
    const sheSaidYes = query.response.toLowerCase() === 'yes';
    sheSaidYes ? this.onValentinesYes() : this.onValentinesNo();
  }

  private onValentinesYes() {
    setTimeout(() => this.celebrate.emit(), 1000);
  }

  private onValentinesNo() {
    const line = new Line({
      content: `well... okay then
  too much cheese huh?
  well I guess I'll got ahead and inform the government you just hacked their mainframe :)`
    });

    this.hackingConsole.insertLine(line, this.curLineIndex + 1);
    this.onLineComplete();
  }
}
