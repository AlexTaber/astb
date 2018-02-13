import { LineQuery } from './line-query';

export class Line {
    content: string;
    loaderIndex: number;
    timeoutLength = 10;
    query: LineQuery;
    type: string;

    constructor(params: {
        content?: string,
        loaderIndex?: number,
        timeoutLength?: number,
        query?: LineQuery,
        type?: string
    }) {
        Object.assign(this, params);
    }
}
