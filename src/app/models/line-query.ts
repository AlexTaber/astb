export class LineQuery {
    label: string;
    correctAnswers: string[];
    responseOnCorrect = 'Correct';
    responseOnIncorrect = 'Incorrect';
    value: any;
    response: string;

    constructor(params: {
        label?: string,
        correctAnswers?: string[],
        responseOnCorrect?: string,
        responseOnIncorrect?: string,
        value?: any
    }) {
        Object.assign(this, params);
    }

    isCorrectAnswer(answer: string): boolean {
        answer = answer.toLowerCase();
        const allAnswersCorrect = !this.correctAnswers;
        return allAnswersCorrect || this.correctAnswers.indexOf(answer) > -1;
    }
}
