import React from 'react'
import { PlaylistItem } from '../playlist-item';
import { AddSongInput } from '../add-song-input';
import { IPlaylistItem } from '../models';
import { PlaylistContainer, InputContainer, PlaylistItemsContainer } from './Playlist.styles';

type PlaylistListProps = {
    items: IPlaylistItem[]
};

export const Playlist: React.FC<PlaylistListProps> = ({ items }) => {
    return (
        <PlaylistContainer>
            <InputContainer>
                <AddSongInput/>
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