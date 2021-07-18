import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { GetVideoPlaylistAction } from './actions/VideoPlaylist';
import * as ActionType from './actions/VideoPlaylistConstants';
import { Video } from './services/models';
import { Get } from 'type-fest';

export interface VideoPlaylistState {
  playlist: object;
  videos: Array<Video>;
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: VideoPlaylistState = {
  playlist: {},
  videos: [],
  isLoading: false,
};

const VideoPlaylistRecucer: Reducer<VideoPlaylistState, GetVideoPlaylistAction> = (
  state: VideoPlaylistState = initialState,
  action: GetVideoPlaylistAction,
): VideoPlaylistState => {
  switch(action.type){
    case ActionType.GET_VIDEO_PLAYLIST_START:
      return {
        ...state,
        playlist: {},
        videos: [],
        isLoading: true,
      };
    case ActionType.GET_VIDEO_PLAYLIST_SUCCEED:
      return {
        ...state,
        playlist: action.payload.result.playlist,
        videos: action.payload.result.videos,
        isLoading: false,
      };
    case ActionType.GET_VIDEO_PLAYLIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;
      return state;
    }
  }
}

export default VideoPlaylistRecucer;
