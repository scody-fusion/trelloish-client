//import actions
import * as actionTypes from '../actions';

import update from 'immutability-helper';

//set initial state
const initialState = {
    board: 
        {
            _id: '1',
            title: 'board one',
            createdDate: 'today',
            createdBy: 'Sean',
            lastModified: 'today',
            description: 'description'
        }
    
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


// reducer handles actions from /actions/index.js
export const boardReducer = (state = initialState, action) => {

    let newState = {};

    switch (action.type) {

        case actionTypes.UPDATE_BOARDS:

            newState = {
                ...state,
                boards: action.boards
            }

            return newState;


        default:
            return state
    }
}
