import React, { useContext, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { ConfigContext } from '../../../root'
import { IPlaylistItem } from '../models';
import { PlaylistItemContainer } from './PlaylistItem.styles';
import { Icon } from '../../../common';
import axios from 'axios';
import { removeItem } from '../Player.actions';

export type PlaylistItemProps = {
    item: IPlaylistItem
};

export const PlaylistItem: React.FC<PlaylistItemProps> = ({ item }) => {
    const context = useContext(ConfigContext);
    const { baseUrl } = context;
    const playlistApiUrl = `${baseUrl}/api/playlist`;
    
    const dispatch = useDispatch();
    const { duration, youtubeId } = item;

    const removePlaylistItemHandler = useCallback(async (e, item) => {
        const { id } = item;
        const url = `${playlistApiUrl}/${id}`;
        
        await axios.delete(url);

        dispatch(removeItem(id));
    }, [dispatch]);

    return (
        <PlaylistItemContainer>
            <div>{youtubeId}</div>
            <div>{duration}</div>
            <Icon iconName="Remove" title="Remove" onClick={(e: any) => removePlaylistItemHandler(e, item)}/>
        </PlaylistItemContainer>
    );
}