import * as React from "react";

const logo = require("../images/logo.svg");

export function Header() {
    return (<div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2 className="project-name">Word Bank</h2>
    </div>);
}