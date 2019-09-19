import {API_BASE_URL} from '../config';

// fetch boards
export const UPDATE_BOARDS = 'UPDATE_BOARDS';
export const updateBoards = (boards) => {
    return {
        type: UPDATE_BOARDS,
        boards: boards
    };
};

export const fetchBoards = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/boards`, {
            method: 'GET'
        })
        .then(res => {
            return res.json()
        })
        .then((boards) => {
            dispatch(updateBoards(boards))
        })
};