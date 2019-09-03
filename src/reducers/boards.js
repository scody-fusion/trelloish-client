//import actions
import * as actionTypes from '../actions';

import update from 'immutability-helper';

//set initial state
const initialState = {
    boards: [
        {
            _id: '1',
            title: 'board one',
            createdDate: 'today',
            createdBy: 'Sean',
            lastModified: 'today',
            description: 'description'
        }
    ]
    
};


// search through boards for a specific board
const findBoard = (boards, board_id, callback) => {
    return boards.map((board, index) => {
        // return untargeted boards
        if (board_id !== board._id) {
            return board
        } else {
            return callback(board)
        }
    })
}

const updateBoards = (state, action) => {
    console.log(action);
    const newState = update(state, { boards: { $set: action.boards } });
    return newState;
}


// reducer handles actions from /actions/index.js
export const boardsReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.UPDATE_BOARDS: return updateBoards(state, action)

        default:
            return state
    }
}
