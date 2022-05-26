import { all } from 'redux-saga/effects';
import watchRanking from './rankingSaga';
import watchSetting from './settingSaga';

export default function* rootSaga() {
    yield all([watchRanking(), watchSetting()]);
}
