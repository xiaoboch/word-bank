import * as React from "react";
import "../css/app.css";
import {Body} from "./body";
import {Header} from "./header";

class App extends React.Component {

    public render() {
        return (
            <div className="app">
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default App;
