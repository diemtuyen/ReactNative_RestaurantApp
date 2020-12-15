import { call, put, select, takeLatest } from 'redux-saga/effects';
import API from '../service/tables';

const authTokenSelector = state => state.auth.loginMessage.access_token;

function* tableTask(action) {
  try {
    const { payload } = action;

    const authToken = yield select(authTokenSelector);

    const res = yield call(API.getTables, payload.id, {
      Authorization: `Bearer ${authToken}`,
    });


    if (res.status === 200) {
      if (payload.id === null) {
        yield put({
          type: 'FETCH_TABLE_SUCCESS',
          payload: res.data,
        });
      } else {
        yield put({
          type: 'FETCH_TABLE_INFO_SUCCESS',
          payload: res.data,
        });
      }
    } else {
      yield put({
        type: 'FETCH_TABLE_ERROR',
        payload: res.data,
      });
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: 'FETCH_TABLE_ERROR',
      payload: e.data,
    });
  }
}

function* tableSaga() {
  yield takeLatest('FETCH_TABLE', tableTask);
}

export default tableSaga;
