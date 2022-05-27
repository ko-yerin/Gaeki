import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

const typingUpAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/typing', action);
};

function* typingUp(action: any) {
    const result: { data: any } = yield call(typingUpAPI, action.payload);
    try {
        if (result.data.errno === 0) throw new Error('골드가 부족합니다.');
        yield put({
            type: 'TYPING_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'TYPING_UP_FAILURE',
            payload: result.data,
        });
    }
    console.log(result.data);
}

const statusAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/show', action);
};

function* status(action: any) {
    const result: { data: {} } = yield call(statusAPI, action.payload);
    try {
        yield put({
            type: 'STATUS_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'STATUS_FAILURE',
        });
    }
}

export default function* market() {
    yield takeLatest('STATUS_REQUEST', status);
    yield takeLatest('TYPING_UP_REQUEST', typingUp);
}