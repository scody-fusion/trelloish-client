import {combineReducers} from 'redux';

import { boardReducer } from 'reducers/board';
import { listsReducer } from 'reducers/lists';
import { cardsReducer } from 'reducers/cards';

export default combineReducers({
    lists: listsReducer,
    cards: cardsReducer,
    board: boardReducer
})
