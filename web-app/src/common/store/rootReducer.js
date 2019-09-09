import { combineReducers } from 'redux';
import { playerReducer } from '../../app/player/Player.reducer'

export const rootReducer = combineReducers({
  player: playerReducer
});