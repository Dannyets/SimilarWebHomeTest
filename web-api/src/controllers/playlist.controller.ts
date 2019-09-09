import { PlaylistItem } from '../models';
import { playlistRepository } from '../repositories';
import { logFactory } from '../factories';
import { BaseController } from './base.controller';

const logger = logFactory.createLogger('playlist-controller');

const playlistController = new BaseController<PlaylistItem>(playlistRepository, logger);

export {
    playlistController
};
