import * as React from "react";
import {IWordExplain} from "../types";

interface IProps {
    wordExplain: IWordExplain;
}

export function WordExplain({wordExplain}: IProps){
    return (
        <div className="word-explain">
            <div className="type">
                {wordExplain.type}
            </div>
            <div className="explain">
                {wordExplain.explain}
            </div>
            <div className="examples">
                {wordExplain.examples.map(example => {
                    return (
                        <div className="example">
                            {example}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
