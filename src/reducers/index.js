import {combineReducers} from 'redux';

import { boardsReducer } from 'reducers/boards';
import { listsReducer } from 'reducers/lists';
import { cardsReducer } from 'reducers/cards';

export default combineReducers({
    lists: listsReducer,
    cards: cardsReducer,
    boards: boardsReducer
})
