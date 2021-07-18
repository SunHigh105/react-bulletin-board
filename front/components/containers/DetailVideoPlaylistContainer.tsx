import React, { useState, useEffect, FC, FormEvent } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { DetailVideoPlaylist, DetailVideoPlaylistProps } from '../presentationals/pages/DetailVideoPlaylist';
// import { getVideoPlaylist } from '../../services/videos';

import { VideoPlaylistState } from '../../reducer';
import { getVideoPlaylistInfo } from '../../actions/VideoPlaylist';
import { Video } from '../../services/models';

interface StateProps {
  playlist: object;
  videos: Array<Video>;
  isLoading?: boolean;
}

interface DispatchProps {
  getVideoPlaylistStart: (playlistId: string) => void;
}

type EnhancedPlaylistProps = DetailVideoPlaylistProps &
  StateProps &
  DispatchProps &
  RouteComponentProps<{ playlistId: string}>;

const mapStateProps = (state: VideoPlaylistState): StateProps => ({
  playlist: state.playlist,
  videos: state.videos,
  isLoading: state.isLoading,
});

const mapDispatchProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({
    getVideoPlaylistStart: (playlistId: string) => getVideoPlaylistInfo({ playlistId });
  }, dispatch);

const DetailVideoPlaylistContaniner: FC<EnhancedPlaylistProps> = ({
  playlist,
  videos,
  isLoading,
  getVideoPlaylistStart,
  match,
}) => {
  const { playlistId } = useParams();

  useEffect(() => {
    getVideoPlaylistStart(playlistId);
  }, []);

  return (
    <DetailVideoPlaylist playlist={playlist} videos={videos} isLoading={isLoading} /> 
  )
}

export default withRouter(
  connect(
    mapStateProps,
    mapDispatchProps,
  )(DetailVideoPlaylistContaniner),
);
// export interface DetailVideoPlaylistContainerProps {
//   isLoggedIn?: boolean,
//   userId?: number | string,
// }

// export const DetailVideoPlaylistContaniner: FC<DetailVideoPlaylistContainerProps> = async ({
//   isLoggedIn = false,
//   userId = '',
// }) => {
//   const params = useParams();
//   const [playlist, setPlaylist] = useState({});
//   const [videos, setVideos] = useState([]);
  
//   const playlistInfo = await getVideoPlaylist(params.playlistId);
//   console.log(playlistInfo);
//   setPlaylist({ ...playlistInfo.playlist[0] });
//   setVideos([ ...playlistInfo.videos ]);
//   console.log(playlist);
//   console.log(videos);

//   return (
//     <DetailVideoPlaylist 
//       playlist={playlist}
//       videos={videos}
//       isLoggedIn={isLoggedIn}
//       userId={userId}
//     />
//   );
// };
