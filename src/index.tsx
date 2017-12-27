import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import {store} from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
