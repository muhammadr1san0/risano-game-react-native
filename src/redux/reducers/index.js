import { combineReducers } from 'redux';
import users from './users';
import leaderboards from './leaderboards';
import games from './games';
const appReducer = combineReducers({
    users,
    leaderboards,
    games

});

export default appReducer;