import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/taskSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
    ]);
}