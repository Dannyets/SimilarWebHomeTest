import React, { useContext, useEffect, useCallback, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ConfigContext } from '../../root'
import { Playlist } from './playlist';
import { Video } from './video';
import axios from 'axios';
import { PlayerContainer } from './Player.styles';
import { getPlaylist } from './Player.selectors';
import { playNextItem, getPlaylistSuccess } from './Player.actions';

export const Player: React.FC = ({ }) => {
    const playlist = useSelector(getPlaylist);
    const dispatch = useDispatch();

    const context = useContext(ConfigContext);
    const { baseUrl } = context;
    const playlistApiUrl = `${baseUrl}/api/playlist`;

    useEffect(() => {
        const getPlaylist = async () => {
            const response = await axios.get(playlistApiUrl);
            const { data } = response;
            dispatch(getPlaylistSuccess(data));
        }

        getPlaylist();

        return () => {

        };
    }, []);

    return (
        <div className="App">
            <div className="App-header">
                <PlayerContainer>
                    <Playlist items={playlist}/>
                    <Video/>
                </PlayerContainer>
            </div>
        </div>
    );
}