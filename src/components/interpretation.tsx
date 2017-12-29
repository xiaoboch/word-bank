import * as React from "react";
import {Label} from "react-bootstrap";
import {connect} from "react-redux";
import {IExample, IInterpretation, IRootState, IWordBankGeneric} from "../types";

interface IProps {
    interpretationId: number;
}

interface IState {
    interpretations: IWordBankGeneric<IInterpretation>;
    examples: IWordBankGeneric<IExample>;
}

export function InterpretationCore(props: IProps & IState) {

    const {examples, interpretationId, interpretations} = props;

    const interpretation = interpretations.byId[interpretationId];
    const exampleIds = interpretation.examples;
    const currentExamples = exampleIds.map(id => examples.byId[id]);

    function getBsStyle() {
        const wordType = interpretation.type;
        switch (wordType) {
            case "vt":
                return "primary";
            case "vi":
                return "primary";
            case "adj":
                return "success";
            case "adv":
                return "info";
            default:
                return "default";
        }
    }

    return (
        <div className="word-interpretation">
            <Label
                className="word-type-label"
                bsSize="large"
                bsStyle={getBsStyle()}
            >
                {interpretation.type}
            </Label>
            <div className="explain">
                {interpretation.explain}
            </div>
            <div className="examples">
                {currentExamples.map(example => {
                    return (
                        <div key={example.id} className="example">
                            {example.sentence}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function mapStateToProps(state: IRootState): IState {
    return {
        examples: state.examples,
        interpretations: state.interpretations,
    };
}

export const Interpretation = connect(mapStateToProps)(InterpretationCore);
