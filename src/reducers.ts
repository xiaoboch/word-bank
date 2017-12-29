import {handleActions} from "redux-actions";
import {IRootState, IWord} from "./types";
/* tslint:disable:object-literal-sort-keys */
const e1 = {id: 1, sentence: "Do not antagonize your customers"};
const e2 = {
    id: 2,
    sentence: "Mired in its civil war, the Syrian government has done little to antagonize Israel.",
};
const e3 = {id: 3, sentence: "he stroked his beard and retired to cogitate."};
const e4 = {id: 4, sentence: "Do not antagonize your customers"};
const e5 = {
    id: 5,
    sentence: "Mired in its civil war, the Syrian government has done little to antagonize Israel.",
};

const i1 = {
    id: 3,
    type: "vt",
    explain: "煽动，鼓动;宣传; 使焦虑不安",
    examples: [1, 2],
};
const i2 = {
    id: 1,
    type: "vt",
    explain: "仔细考虑",
    examples: [3],
};
const i3 = {
    id: 2,
    type: "vt",
    explain: "对抗，敌对",
    examples: [4, 5],
};

const agitate = {
    id: 3,
    word: "agitate",
    interpretations: [1],
};

const cogitate = {
    id: 2,
    word: "cogitate",
    interpretations: [2],
};

const antagonize = {
    id: 1,
    word: "antagonize",
    interpretations: [3],
    similarWords: [2, 3],
    prefix: "an",
    root: ["agon", "ig", "ag"],
    suffix: "ize",
    rootExplain: "act",
    createdAt: new Date(),
    synonymIds: [2, 3],
} as IWord;

const preloadState = {
    words: {
        allIds: [1, 2, 3],
        byId: {
            1: antagonize,
            2: agitate,
            3: cogitate,
        },
    },

    examples: {
        allIds: [1, 2, 3, 4, 5],
        byId: {
            1: e1,
            2: e2,
            3: e3,
            4: e4,
            5: e5,
        },
    },

    interpretations: {
        allIds: [1, 2, 3],
        byId: {
            1: i1,
            2: i2,
            3: i3,
        },
    },

    newWord: undefined as any,
} as IRootState;

export const rootReducer = handleActions({}, preloadState);

export const getAllWords = (state: IRootState) => state.words;
