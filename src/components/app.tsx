import * as React from "react";
import "../css/app.css";
import {Header} from "./header";
import {Body} from "./body";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default App;
