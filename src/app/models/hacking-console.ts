import { Line } from './line';

export class HackingConsole {
    lines: Line[];

    constructor(params: {
        lines: Line[]
    }) {
        Object.assign(this, params);
    }
}
