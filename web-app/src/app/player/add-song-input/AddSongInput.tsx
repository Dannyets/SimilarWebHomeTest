import React, { useState, useReducer, useCallback, useContext } from 'react'
import { useDispatch } from 'react-redux';
import { ConfigContext } from '../../../root'
import { addItem } from '../Player.actions';
import { IPlaylistItem } from '../models';
import axios from 'axios';
import { AddSoungInputContainer, AddButton, AddInput } from './AddSongInput.styles';

export const AddSongInput: React.FC = ({ }) => {
    const context = useContext(ConfigContext);
    const { baseUrl } = context;
    const playlistApiUrl = `${baseUrl}/api/playlist`;

    const [songId, setSongId] = useState("");
    const dispatch = useDispatch();

    const onAddSongHandler = useCallback(async (e, songId) => {
        const playlistItem: IPlaylistItem = {
            id: '',
            youtubeId: songId,
            name: songId,
            duration: 0
        };

        await axios.post(playlistApiUrl, playlistItem);

        dispatch(addItem(playlistItem));
    }, [dispatch]);

    return (
        <AddSoungInputContainer>
            <AddInput onChange={(value) => setSongId(value)}
                      placeholder="Enter Video Id"/>
            <AddButton text="Add" 
                       onClick={(e) => onAddSongHandler(e, songId)}
                       iconName="Plus"
                       disabled={!songId}/>
        </AddSoungInputContainer>
    );
}