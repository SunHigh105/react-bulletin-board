import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/VideoPlaylistConstants';
import { getVideoPlaylistFactory } from '../services/videos';
import { getVideoPlaylistInfo } from '../actions/VideoPlaylist';

function* runGetVideoPlaylist(action: ReturnType<typeof getVideoPlaylistInfo.start>) {
  const { playlistId } = action.payload;

  try {
    const api = getVideoPlaylistFactory();
    const playlistInfo = yield call(api, playlistId);

    yield put(getVideoPlaylistInfo.succeed({ playlistId }, { playlistInfo }));
  } catch (e) {
    yield put(getVideoPlaylistInfo.fail({ playlistId }, e));
  }
}

export function* watchGetVideoPlaylist() {
  yield takeLatest(Action.GET_VIDEO_PLAYLIST_START, runGetVideoPlaylist);
}

export default function* rootSaga() {
  yield all([fork(watchGetVideoPlaylist)]);
}