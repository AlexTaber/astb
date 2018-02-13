import { Line } from './line';

export class HackingConsole {
    lines: Line[];

    constructor(params: {
        lines: Line[]
    }) {
        Object.assign(this, params);
    }

    insertLine(line: Line, index: number) {
        this.lines.splice(index, 0, line);
    }
}
