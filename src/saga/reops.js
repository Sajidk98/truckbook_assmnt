import { put, takeLatest, call } from "redux-saga/effects";
import api from "../api";
import type from "../actions/constant";

function* fetchRepoByRepoHandler(action) {
  try {
    const list = yield call(api.fetchRepoByRepo, action.payload);
    yield put({ type: type.GET_MOVIES_SUCCESS, payload: list });
  } catch (error) {
    yield put({ type: type.GET_MOVIES_FAILED });
  }
}

function* fetchGenreHandler(action) {
  try {
    const genre = yield call(api.getGenre, action.payload);
    yield put({ type: type.GET_GENRE_SUCCESS, payload: genre });
  } catch (error) {
    yield put({ type: type.GET_GENRE_FAILED });
  }
}

function* getDetailHandler(action) {
  try {
    const details = yield call(api.getDetails, action);
    yield put({ type: type.GET_DETAIL_SUCCESS, payload: details });
  } catch (error) {
    yield put({ type: type.GET_DETAIL_FAILED });
  }
}

function* repoSaga() {
  yield takeLatest(type.GET_MOVIES_REQUEST, fetchRepoByRepoHandler);
  yield takeLatest(type.GET_GENRE_REQUEST, fetchGenreHandler);
  yield takeLatest(type.GET_DETAIL_REQUEST, getDetailHandler);
}

export default repoSaga;
