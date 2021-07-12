import React, { useState, useEffect, FC, FormEvent } from 'react';
import { RegistVideoPlaylist } from '../presentationals/pages/RegistVideoPlaylist';
import { registVideoPlaylist, registVideos } from '../../services/videos';
import { Video } from '../../services/models';

export const RegistVideoPlaylistContaniner: FC = () => {
  const [playlist, setPlaylist] = useState({ name: '', user_id: 1, is_public: true });
  const [videoTitles, setVideoTitles] = useState({});
  const [videoUrls, setVideoUrls] = useState({});

  const handlePlaylist = (
    targetName: string,
    newValue: string | boolean,
  ) => {
    if (newValue !== '') {
      setPlaylist(v => ({ ...v, [targetName]: newValue }));
    }
  };

  const handleVideoTitles = (
    num: number,
    newValue: string
  ) => {
    if (newValue !== '') {
      setVideoTitles(v => ({ ...v, [num]: newValue }));
    }
  };

  const handleVideoUrls = (
    num: number,
    newValue: string
  ) => {
    if (newValue !== '') {
      setVideoUrls(v => ({ ...v, [num]: newValue }));
    }
  };
  
  const handleRegist = async (e: FormEvent<HTMLFormElement>) => {
    // Playlist Nameのバリデーション
    if (playlist.name === '') {
      alert('Please input Playlist name');
      return;
    }

    // videoTitlesとvideoUrlsを合体
    const videos = [];
    let isError = false;
    Object.keys(videoTitles).map(num => {
      if (!videoUrls.[num]) {
        isError = true;
        return;
      }
      videos.push({ name: videoTitles.[num], playlist_id: 1, url: videoUrls.[num]})
    });

    if(Object.keys(videoTitles).length === 0 || Object.keys(videoUrls).length === 0) {
      isError = true;
    }

    // console.log(playlist);
    // console.log(videos);
    // console.log(videoTitles);
    // console.log(videoUrls);

    if (isError) {
      alert('Please input both video title and url');
      return;
    }
    
    // console.log(videoTitles);
    // console.log(videoUrls);
    // const playlistRes = await registVideoPlaylist(playlist);
    // console.log(playlistRes);
    // const videosRes = registVideos();
    // console.log(videosRes);
  };
  
  return (
    <RegistVideoPlaylist
      handlePlaylist={handlePlaylist}
      handleRegist={handleRegist}
      handleVideoTitles={handleVideoTitles}
      handleVideoUrls={handleVideoUrls}
      playlist={playlist}
    />
  );
}
