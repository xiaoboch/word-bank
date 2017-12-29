import * as React from "react";
import {connect} from "react-redux";
import "../css/word-list.css";
import {getAllWords} from "../reducers";
import {IRootState, IWord, IWordBankGeneric} from "../types";
import {Word} from "./word";

interface IProp {
    words: IWordBankGeneric<IWord>;
}

function WordListCore({words}: IProp) {
    return (
        <div className="word-list">
            {words.allIds.map((wordId: any) => <Word key={wordId} wordId={wordId}/>)}
        </div>
    );
}

function mapStateToProps(state: IRootState) {
    return {
        words: getAllWords(state),
    };
}

export const WordList = connect(mapStateToProps)(WordListCore);
