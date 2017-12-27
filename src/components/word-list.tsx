import * as React from "react";
import {connect} from "react-redux";
import {getAllWords} from "../reducers";
import {IRootState, IWord} from "../types";
import {Word} from "./word";


interface IProp {
    words: IWord[];
}

function WordListCore({words}: IProp){
    return (
        <div className="word-list">
            {words.map(word => <Word word={word}/>)}
        </div>
    );
}

function mapStateToProps(state: IRootState) {
    return {
        words: getAllWords(state),
    }
}

export const WordList = connect(mapStateToProps )(WordListCore);