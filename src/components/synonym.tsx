import * as React from "react";
import {IWord} from "../types";

interface IProps {
    synonym: IWord;
}

export function Synonym({synonym}: IProps) {
    return (
        <div className="word">
            <div className="explain">
                {synonym.word}
            </div>
            {/*<div className="explains">*/}
                {/*{synonym.interpretations.map(id => {*/}
                    {/*return <Interpretation key={id} interpretationId={id}/>;*/}
                {/*})}*/}
            {/*</div>*/}
        </div>
    );
}
