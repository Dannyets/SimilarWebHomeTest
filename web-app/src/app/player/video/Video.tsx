import React, { useCallback, useContext } from 'react'
import { ConfigContext } from '../../../root';
import { useSelector, useDispatch } from 'react-redux';
import YouTube, { Options } from 'react-youtube';
import { IPlaylistItem } from '../models';
import { getCurrentlyPlayingItem } from '../Player.selectors';
import { playNextItem } from '../Player.actions';
import { VideoContainer } from './Video.styles';
import axios from 'axios';

const opts: Options = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

export const Video: React.FC = ({ }) => {
  const videoItem = useSelector(getCurrentlyPlayingItem);
  const dispatch = useDispatch();

  const context = useContext(ConfigContext);
  const { baseUrl } = context;
  const playlistApiUrl = `${baseUrl}/api/playlist`;
  
  const onVideoEnd = useCallback(async (e, item: IPlaylistItem) => {
    const { id } = item;

    const url = `${playlistApiUrl}/${id}`;

    await axios.delete(url);

    dispatch(playNextItem());
  }, []);

  const onVideoReady = (e: any) => {
    e.target.playVideo();
  }

  if (!videoItem || !videoItem.youtubeId) {
    return <div>Empty video id, please enter a new one</div>
  }

  const { youtubeId } = videoItem;

  return (
    <VideoContainer>
      <YouTube
        videoId={youtubeId}
        opts={opts}
        onEnd={(e) => onVideoEnd(e, videoItem)}
        onReady={(e) => onVideoReady(e)}
      />
    </VideoContainer>
  );
}