import { GET_PLAYLIST, PLAY_NEXT, ADD_ITEM, REMOVE_ITEM } from './Player.actionTypes';
import { IPlaylistItem } from './models';

export const getPlaylistSuccess = (playlist: IPlaylistItem[]) => ({
    type: GET_PLAYLIST,
    payload: { playlist }
});

export const playNextItem = () => ({
    type: PLAY_NEXT,
    payload: {

    }
});

export const addItem = (playlistItem: IPlaylistItem) => ({
    type: ADD_ITEM,
    payload: {
        playlistItem
    }
});

export const removeItem = (id: string) => ({
    type: REMOVE_ITEM,
    payload: {
        id
    }
});