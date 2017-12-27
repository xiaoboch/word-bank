export interface IRootState {
    words: IWord[];
    language: string;
    newWordGroup: IWord;
}

export interface IWord {
    id: number;
    word: string;
    wordExplain: IWordExplain[];
    prefix: string;
    root: string[];
    rootExplain: string;
    suffix: string;
    synonyms: IWord[];
    createdAt: Date;
}

export interface IWordExplain {
    type: string
    explain: string;
    examples: string[];
}