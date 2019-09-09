import { BaseRouter } from './base.router';
import { playlistController } from '../controllers';

export const playlistRouter = new BaseRouter(playlistController);
