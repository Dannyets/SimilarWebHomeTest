import { GET_PLAYLIST, PLAY_NEXT, ADD_ITEM, REMOVE_ITEM } from "./Player.actionTypes";
import { playerDefaultState } from "./Player.store";
import { Action } from "./models";

export const playerReducer = (state = playerDefaultState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PLAYLIST: {
            const { playlist } = payload;
            const currentlyPlaying = playlist[0];

            return {
                ...state,
                playlist,
                currentlyPlaying
            };
        }

        case PLAY_NEXT:{
            const { playlist } = state;
            const newPlaylist = [...playlist.slice(1, playlist.length)];
            const currentlyPlaying = newPlaylist[0];

            return {
                ...state,
                playlist: newPlaylist,
                currentlyPlaying
            }
        }

        case ADD_ITEM: {
            const { playlistItem } = payload;
            const { playlist, currentlyPlaying: stateCurrentlyPlaying } = state;

            const currentlyPlaying = playlist.length === 0 ? playlistItem : stateCurrentlyPlaying;

            return {
                ...state,
                playlist: [...playlist, playlistItem],
                currentlyPlaying
            };
        }

        case REMOVE_ITEM: {
            const { id } = payload;
            const { playlist } = state;

            const newPlaylist = playlist.filter(pi => pi.id !== id);
            const currentlyPlaying = newPlaylist[0];

            return {
                ...state,
                playlist: newPlaylist,
                currentlyPlaying
            };
        }
    
        default:
            return state;
    }
}