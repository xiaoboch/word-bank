import {Action} from "redux-actions";
import {all, fork, takeLatest} from "redux-saga/effects";

function* callLoadVerbatim(action: Action<number>) {
    const verbatimId = yield action.payload;
    console.log(verbatimId);
}


function* watchLoadVerbatim() {
    yield takeLatest("something", callLoadVerbatim);
}

export default function* categoryIdRootSaga(): IterableIterator<any> {
    yield all([
        fork(watchLoadVerbatim),
    ]);
}
