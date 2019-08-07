import {combineReducers} from 'redux';

import { trelloishReducer } from 'reducers/trelloish';

export default combineReducers({
    trelloish: trelloishReducer
})
