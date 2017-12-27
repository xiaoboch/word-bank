import * as React from "react";
import {IWord} from "../types";
import {WordExplain} from "./wordExplain";

interface IProps {
    synonym: IWord;
}

export function Synonym({synonym}: IProps) {
    return (
        <div className="word">
            <div className="label">
                {synonym.word}
            </div>
            <div className="explains">
                {synonym.wordExplain.map(explain => {
                    return <WordExplain wordExplain={explain}/>
                })}
            </div>
        </div>
    );
}
