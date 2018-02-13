import { Injectable } from '@angular/core';
import { HackingConsole } from '../models/hacking-console';
import { Line } from '../models/line';
import { LineQuery } from '../models/line-query';

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
        content: `INITIALIZING`
      }),

      new Line({
        timeoutLength: 100,
        content: `. . . . . . . . . .`
      }),

      new Line({
        content: `COMPLETE
  systems check`
      }),

      new Line({
        loaderIndex: 20
      }),

      new Line({
        timeoutLength: 5,
        content: `AUTH REQUIRED
initializing authentication module
NULL-MD5 NULL-SHA RC4-MD5 RC4-SHA
curl -o curl.htm nsa.clearance-10-djfk32rkjfkf2jkf
`
      }),

      new Line({
        query: new LineQuery({
          label: 'Username',
          correctAnswers: [ 'sarabond27' ],
          responseOnCorrect: 'AUTHENTICATE SUCCESS'
        })
      }),

      new Line({
        content: `ACCESSING NSA MAINFRAME... this may take a moment`
      }),

      new Line({
        loaderIndex: 200
      }),

      new Line({
        content: `ACCESS DENIED
  UNIDENTIFIED IP 127.108.1.55
  initializing two factor authentication module`,
        type: 'danger'
      }),

      new Line({
        query: new LineQuery({
          label: 'Password',
          correctAnswers: [ 'derra' ],
          responseOnCorrect: `AUTHENTICATE SUCCESS - sercurity clearance granted
  uploading new device to network`
        })
      }),

      new Line({
        timeoutLength: 100,
        content: `. . . . . . . . . .`
      }),

      new Line({
        timeoutLength: 20,
        type: 'danger',
        content: `Non government issued device detected
  WARNING - under federal mandate it is a crime to integrate personal devices into federal systems
  device IP 127.108.1.55 has been sent for further review`
      }),

      new Line({
        content: `DOWLOADING PROFILE`
      }),

      new Line({
        loaderIndex: 50
      }),

      new Line({
        content: `DOWNLOAD COMPLETE
  current cases:
  North Korean Sanctions
  Russian Hacking Investigation
  Public Inquiry - 1 URGENT ITEM
  INITIALIZING Public Inquiry Case`
      }),

      new Line({
        loaderIndex: 50
      }),

      new Line({
        content: `DOWNLOAD COMPLETE
  OPENING URGENT ITEM
  description: Inquiry regarding plans for 02-14-2018
  messageIP: 184.284.1.44 (Connecticut, USA)
  DO YOU WISH TO OPEN THIS MESSAGE (YES/NO)`
      }),

      new Line({
        query: new LineQuery({
          label: 'YES/NO',
          correctAnswers: [ 'yes' ],
          responseOnCorrect: `DOWNLOADING MESSAGE CONTENT`
        })
      }),

      new Line({
        loaderIndex: 100
      }),

      new Line({
        timeoutLength: 40,
        content: `Hey Beautiful!
  It's Alex. Of course. Who else would do something this cheesy.`
      }),

      new Line({
        timeoutLength: 100,
        content: `. . . . . . .`
      }),

      new Line({
        timeoutLength: 40,
        content: `Can you believe we're about to build a new life full of delicious vegan food, huuuge muscles, travels, and inevitable insta fame?! Can we go ahead and go now?? You're such a relentlessly hard working person, who demands the best of herself, and challenges me to do the same. I'll never quite be able to tell you just how grateful I am for you.`
      }),

      new Line({
        timeoutLength: 40,
        content: `Anyway, before we galavant across the world together, I needed to ask you something. And this was obviously the only possible means by which to do so.`
      }),

      new Line({
        timeoutLength: 40,
        content: `...........................................`
      }),

      new Line({
        timeoutLength: 40,
        content: `Will You Be My Valentine?`
      }),

      new Line({
        query: new LineQuery({
          label: 'YES/NO',
          correctAnswers: [ 'yes', 'no' ],
          responseOnCorrect: `INITIATING RESPONSE...`,
          responseOnIncorrect: 'Invalid Response',
          value: 'valentines'
        })
      }),
    ];
  }
}
