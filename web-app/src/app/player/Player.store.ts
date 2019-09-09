import { IPlaylistItem } from "./models";

export interface PlayerState {
    playlist: IPlaylistItem[],
    currentlyPlaying?: IPlaylistItem
};

export const playerDefaultState: PlayerState = {
    playlist: []
};