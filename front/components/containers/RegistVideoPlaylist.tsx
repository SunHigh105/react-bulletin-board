import React, { useState, useEffect, FC, FormEvent, SyntheticEvent } from 'react';
import { RegistVideoPlaylist } from '../presentationals/pages/RegistVideoPlaylist';
import { registVideoPlaylist, registVideos } from '../../services/videos';

export const RegistVideoPlaylistContaniner: FC = () => {
  const [playlist, setPlaylist] = useState({ name: '', user_id: 1, is_public: false });
  const [videos, setVideos] = useState([]);

  const handlePlaylist = (
    targetName: string,
    newValue: string,
  ) => {
    setPlaylist(v => ({ ...v, [targetName]: newValue }));
  };

  const handleVideos = () => {
    // todo;
    console.log('handleVideos');
  };
  
  const handleRegist = (e: FormEvent<HTMLFormElement>) => {
    const playlistRes = registVideoPlaylist();
    console.log(playlistRes);
    const videosRes = registVideos();
    console.log(videosRes);
  };
  
  return (
    <RegistVideoPlaylist
      handlePlaylist={handlePlaylist}
      handleVideos={handleVideos}
      handleRegist={handleRegist}
      playlist={playlist}
      videos={videos}
    />
  );
}
