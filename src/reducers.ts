import {handleActions} from "redux-actions";
import {IRootState, IWord} from "./types";

const agitate = {
    word: "agitate",
    wordExplain: [
        {
            type: "vt",
            explain: "煽动，鼓动;宣传; 使焦虑不安",
            examples: [
                "Do not antagonize your customers",
                "Mired in its civil war, the Syrian government has done little to antagonize Israel."
            ]
        }],
};

const cogitate = {
    word: "cogitate",
    wordExplain: [
        {
            type: "vt",
            explain: "仔细考虑",
            examples: [
                "he stroked his beard and retired to cogitate."
            ]
        }],
};

const antagonize = {
    word: "antagonize",
    wordExplain: [{
        type: "vt",
        explain: "对抗，敌对",
        examples: ["Do not antagonize your customers", "Mired in its civil war, the Syrian government has done little to antagonize Israel."]
    }],
    prefix: "an",
    root: ["agon", "ig", "ag"],
    suffix: "ize",
    rootExplain: "act",
    createdAt: new Date(),
    synonyms: [agitate, cogitate],
} as IWord;

const preloadState = {
    words: [antagonize],
} as IRootState;

export const rootReducer = handleActions({}, preloadState);

export const getAllWords = (state: IRootState) => state.words;