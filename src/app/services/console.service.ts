import { Injectable } from '@angular/core';
import { HackingConsole } from '../models/hacking-console';
import { Line } from '../models/line';

@Injectable()
export class ConsoleService {

  constructor() { }

  getConsole(): HackingConsole {
    return new HackingConsole({
      lines: this.getConsoleLines()
    });
  }

  private getConsoleLines(): Line[] {
    return [
      new Line({
        content: `INITIALIZING . . .
  . . .
  . . .
  COMPLETE

  systems check:
`
      }),

      new Line({
        loaderIndex: 100
      })
    ];
  }
}
