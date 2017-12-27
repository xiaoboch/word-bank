import {routerMiddleware} from "react-router-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./reducers";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

import createHistory from "history/createBrowserHistory";
let enhancer = applyMiddleware(sagaMiddleware);

export const history = createHistory();
if (process.env.NODE_ENV !== "production") {
    enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)));
}

export const store = createStore(rootReducer, enhancer);

const myRootSaga: any = rootSaga;
sagaMiddleware.run(myRootSaga);
