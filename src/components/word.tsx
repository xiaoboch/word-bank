import * as React from "react";
import {Glyphicon, Well} from "react-bootstrap";
import {connect} from "react-redux";
import {IRootState, IWord, IWordBankGeneric} from "../types";
import {Interpretation} from "./interpretation";

interface IProps {
    wordId: number;
}

interface IState {
    words: IWordBankGeneric<IWord>;
}

export function WordCore({wordId, words}: IProps & IState) {

    const word = words.byId[wordId];

    return (
        <Well className="word">
            <h4 className="word-icon"><Glyphicon glyph="bookmark"/></h4>
            <div className="word-label">
                {word.word}
            </div>
            <div className="explains">
            {word.interpretations.map(id => {
            return <Interpretation key={id} interpretationId={id}/>;
            })}
            </div>
            {/*<div className="synonyms">*/}
            {/*{word.synonyms.map(synonym => {*/}
            {/*return <Synonym key={synonym.id} synonym={synonym}/>;*/}
            {/*})}*/}
            {/*</div>*/}
        </Well>
    );
}

function mapStateToProps(state: IRootState): IState {
    return {words: state.words};
}

export const Word = connect(mapStateToProps)(WordCore);
