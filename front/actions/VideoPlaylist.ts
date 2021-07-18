import { AxiosError } from 'axios';

import * as ActionType from './VideoPlaylistConstants';
import { Video } from '../services/models';

interface GetVideoPlaylistParams {
  playlistId: number
}

interface GetVideoPlaylistResult {
  playlist: object;
  videos: Array<Video>;
}

export const getVideoPlaylistInfo = {
  start: (params: GetVideoPlaylistParams) => ({
    type: ActionType.GET_VIDEO_PLAYLIST_START as typeof ActionType.GET_VIDEO_PLAYLIST_START,
    payload: params,
  }),

  succeed: (params: GetVideoPlaylistParams, result: GetVideoPlaylistResult) => ({
    type: ActionType.GET_VIDEO_PLAYLIST_SUCCEED as typeof ActionType.GET_VIDEO_PLAYLIST_SUCCEED,
    payload: { params, result }
  }),

  fail: (params: GetVideoPlaylistParams, error: AxiosError) => ({
    type: ActionType.GET_VIDEO_PLAYLIST_FAIL as typeof ActionType.GET_VIDEO_PLAYLIST_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type GetVideoPlaylistAction = 
  | ReturnType<typeof getVideoPlaylistInfo.start>
  | ReturnType<typeof getVideoPlaylistInfo.succeed>
  | ReturnType<typeof getVideoPlaylistInfo.fail>