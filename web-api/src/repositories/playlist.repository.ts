import { InMemoryRepository } from '@infra/repositories';
import { repositoryFactory } from '@infra/factories';
import { PlaylistItem } from '../models';

const playlistRepository = repositoryFactory.createRepository<PlaylistItem>(
    InMemoryRepository,
    'playlist',
    `${__dirname}/../data/playlist.json`,
);

export {
    playlistRepository
};
