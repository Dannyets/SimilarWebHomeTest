import { PlayerState } from './Player.store';

export const getPlayerState = (state: any) => state.player as PlayerState;
export const getPlaylist = (state: any) => getPlayerState(state).playlist;
export const getCurrentlyPlayingItem = (state: any) => getPlayerState(state).currentlyPlaying;