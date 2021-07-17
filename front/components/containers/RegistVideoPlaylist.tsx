import React, { useState, useEffect, FC, FormEvent } from 'react';
import { RegistVideoPlaylist } from '../presentationals/pages/RegistVideoPlaylist';
import { registVideoPlaylist, registVideos } from '../../services/videos';

export const RegistVideoPlaylistContaniner: FC = () => {
  // todo: user_idは動的に割り当て
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
      videos.push({ name: videoTitles.[num], url: videoUrls.[num]})
    });

    // todo: Video URLsのフォーム制御を加え、バリデーションをちゃんとする
    if(Object.keys(videoTitles).length === 0 || Object.keys(videoUrls).length === 0) {
      isError = true;
    }

    // 動画URLのバリデーション
    if (isError) {
      alert('Please input both video title and url');
      return;
    }
    
    const playlistResponse = await registVideoPlaylist(playlist);
    const videosResponse = await registVideos(videos);

    // 登録成功時
    if (playlistResponse.isSucceeded && videosResponse.isSucceeded) {
      alert('Video playlist registration succeeded!');
      // todo: detail/video_playlistにリダイレクト
      return;
    }

    // 登録失敗時
    alert('Video playlist registration failed.');
    return;
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
