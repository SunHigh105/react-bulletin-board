import { createAxiosInstance } from "./common";
import { VideoPlaylist, Video } from './models';

export const registVideoPlaylist = async (playlist?: VideoPlaylist) => {
  const instance = createAxiosInstance();

  try {
    const res = await instance.post('/api/regist_video_playlist', playlist);
  } catch (e) {
    console.log(e);
  }
};

export const registVideos = async (videos?: Array<Video>) => {
  const instance = createAxiosInstance();

  try {
    const res = await instance.post('/api/regist_videos', videos);
  } catch (e) {
    console.log(e);
  }
}