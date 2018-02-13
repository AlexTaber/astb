import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../services/console.service';
import { HackingConsole } from '../../models/hacking-console';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  hackingConsole: HackingConsole;
  curLineIndex = 0;

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
}
