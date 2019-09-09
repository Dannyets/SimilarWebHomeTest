export * from './base.router';

import { Route } from '../models';
import { playlistRouter } from './playlist.router';

const routes: Route[] = [
    {
        route: '/api/playlist',
        router: playlistRouter.router,
    },
];

export {
    routes
};
