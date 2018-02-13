export class Line {
    content: string;
    loaderIndex: number;

    constructor(params: {
        content?: string,
        loaderIndex?: number
    }) {
        Object.assign(this, params);
    }
}
