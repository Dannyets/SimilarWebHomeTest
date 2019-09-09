import { Player } from '../app';
import { IRoute } from '../common';

export const routes: IRoute[] = [
    {
        url: '/',
        component: Player,
        exact: true,
        navigation: {
            show: true,
            displayName: 'Playlist'
        }
    },
];