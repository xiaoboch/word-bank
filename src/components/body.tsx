import * as React from "react";
import {WordList} from "./word-list";
import { WordEdit} from "./word-edit";

export function Body() {
    return (
        <div className="main">
            <WordEdit/>
            <WordList/>
        </div>
    );
}
