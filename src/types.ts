export interface IRootState {
    words: IWordBankGeneric<IWord>;
    examples: IWordBankGeneric<IExample>;
    interpretations: IWordBankGeneric<IInterpretation>;
    newWord: IWord;
}

export interface IWordBankGeneric<T> {
    byId: {[id: number]: T};
    allIds: number[];
}

export interface IKey {
    id: number;
}

export interface IWord {
    id: number;
    word: string;
    prefix?: string;
    root?: string[];
    rootExplain?: string;
    suffix?: string;
    synonyms?: number[];
    interpretations: number[];
    similarWords?: number[];
    createdAt?: Date;
}

export interface IInterpretation {
    id: number;
    type: string;
    explain: string;
    examples: number[];
}

export interface IExample {
    id: number;
    sentence: string;
}
