import { createAxiosInstance } from "./common";
import { VideoPlaylist, Video } from './models';

const succeededResponse = { isSucceeded: true };
const failedResponse = { isSucceeded: false };

export const registVideoPlaylist = async (playlist?: VideoPlaylist) => {
  const instance = createAxiosInstance();

  try {
    const res = await instance.post('/api/regist_video_playlist', playlist);
    return succeededResponse;
  } catch (e) {
    return failedResponse;
  }
};

export const registVideos = async (videos?: Array<Video>) => {
  const instance = createAxiosInstance();

  try {
    const res = await instance.post('/api/regist_videos', videos);
    return succeededResponse;
  } catch (e) {
    return failedResponse;
  }
};
