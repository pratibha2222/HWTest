import { all } from 'redux-saga/effects';
import { watchGetAR } from './getAircraftDataSaga';

export default function* rootSaga() {
    yield all([
        watchGetAR()
    ]);
}