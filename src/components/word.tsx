import * as React from "react";
import {IWord} from "../types";
import {Synonym} from "./synonym";
import {WordExplain} from "./wordExplain";

interface IProps {
    word: IWord;
}

export function Word({word}: IProps){
    return (
        <div className="word">
            <div className="label">
                {word.word}
            </div>
            <div className="explains">
                {word.wordExplain.map(explain => {
                  return <WordExplain wordExplain={explain} />
                })}
            </div>
            <div className="synonyms">
                {word.synonyms.map(syno => {
                    return <Synonym synonym={syno} />
                })}
            </div>
        </div>
    );
}
