import * as React from "react";
import {
    Button, ButtonToolbar, Col, FormControl, Glyphicon, Row, ToggleButton,
    ToggleButtonGroup, Well,
} from "react-bootstrap";

export function WordEdit() {

    return (
        <Well className="word-edit">
            <Row className="word-input">
                <Col sm={3}>
                    <FormControl type="word" placeholder="Word"/>
                </Col>
            </Row>
            <Row className="interpretation-editor">
                <Col sm={2} className="type-radio-selector">
                    <ButtonToolbar>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton value={1}>vt</ToggleButton>
                            <ToggleButton value={2}>vi</ToggleButton>
                            <ToggleButton value={3}>adj</ToggleButton>
                            <ToggleButton value={4}>adv</ToggleButton>
                            <ToggleButton value={5}>n</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </Col>
                <Col sm={9} className="example-textarea">
                    <FormControl componentClass="textarea" placeholder="Example" />
                </Col>
                <Col sm={1} className="add-new-example">
                    <Button type="submit" className="add-new-example-btn">
                        <h4 className="add-new-example-icon"><Glyphicon glyph="plus"/></h4>
                    </Button>
                </Col>
            </Row>

            <Row className="save-button">
                <Col sm={10}>
                    <Button type="submit">
                        Save
                    </Button>
                </Col>
            </Row>
        </Well>
    );
}
