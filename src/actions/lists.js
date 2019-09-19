import {API_BASE_URL} from '../config';

export const UPDATE_LISTS = 'UPDATE_LISTS';
export const updateLists = (lists) => {
    return {
        type: UPDATE_LISTS,
        lists: lists
    };
};

export const fetchLists = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/lists`, {
            method: 'GET',
        })
        .then(res => {
            return res.json()
        })
        .then((lists) => {
            dispatch(updateLists(lists))
        })
};

// edit list title
export const SET_LIST_TITLE_EDITING = 'SET_LIST_TITLE_EDITING';
export const setListTitleEditing = (list_id) => {
    return {
        type: SET_LIST_TITLE_EDITING,
        list_id: list_id
    };
};

// save list title
export const saveListTitleToCollection = (list_id, editedTitle) => (dispatch) => {
    const data = {
        _id: list_id,
        title: editedTitle
    };
    console.log(data);
    return fetch(`${API_BASE_URL}/lists`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => dispatch(fetchLists()))
}

export const createNewList = (board_id, listTitle) => (dispatch) => {
    const data = {
        board: board_id,
        title: listTitle,
        createdBy: 'user'
    };
    console.log(data);
    return fetch(`${API_BASE_URL}/lists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => dispatch(fetchLists()))
}