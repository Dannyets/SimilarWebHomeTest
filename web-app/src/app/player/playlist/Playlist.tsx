import React from 'react'
import { PlaylistItem } from '../playlist-item';
import { AddPlaylistItemInput } from '../add-playlist-item-input';
import { IPlaylistItem } from '../models';
import { PlaylistContainer, InputContainer, PlaylistItemsContainer } from './Playlist.styles';

type PlaylistListProps = {
    items: IPlaylistItem[]
};

export const Playlist: React.FC<PlaylistListProps> = ({ items }) => {
    return (
        <PlaylistContainer>
            <InputContainer>
                <AddPlaylistItemInput/>
            </InputContainer>
            <PlaylistItemsContainer>
                {items.map(i => (
                    <PlaylistItem key={i.id} 
                                  item={i}/>
                ))}
            </PlaylistItemsContainer>
        </PlaylistContainer>
    );
}