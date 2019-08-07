import {API_BASE_URL} from '../config'

// fetch boards
export const UPDATE_BOARDS = 'UPDATE_BOARDS';
export const updateBoards = (boards) => {
    return {
        type: UPDATE_BOARDS,
        boards: boards
    }
}

export const fetchBoards = () => (dispatch, getState) => {
    console.log('hello from fetchboards action');
    return fetch(`${API_BASE_URL}/boards`, {
            method: 'GET'
        })
        .then(res => {
            return res.json()
        })
        .then((boards) => {
            // console.log('action boards',boards);
            dispatch(updateBoards(boards))
        })
}

// edit list title
export const SET_EDITING_LIST_TITLE = 'SET_EDITING_LIST_TITLE';
export const setEditing = (board_id, list_id) => {
    return {
        type: SET_EDITING_LIST_TITLE,
        board_id: board_id,
        list_id: list_id
    }
}

// save list title
export const SAVE_EDITED_LIST_TITLE = 'SAVE_EDITED_LIST_TITLE';
export const saveEditTitle = (board_id, list_id, newTitle) => {
    return {
        type: SAVE_EDITED_LIST_TITLE,
        board_id: board_id,
        list_id: list_id,
        newTitle: newTitle
    }
}

// create a new list
export const CREATE_NEW_LIST = 'CREATE_NEW_LIST';
export const createNewList = (board_id, listTitle) => {
    return {
        type: CREATE_NEW_LIST,
        board_id: board_id,
        listTitle: listTitle
    }
}

// create a new card
export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';
export const createNewCard = (board_id, list_id, cardTitle) => {
    return {
        type: CREATE_NEW_CARD,
        board_id: board_id,
        list_id: list_id,
        cardTitle: cardTitle
    }
}


// edit a card title
export const SET_CARD_TITLE_EDITING = 'SET_CARD_TITLE_EDITING';
export const setCardTitleEditing = (board_id, list_id, card_id) => {
    return {
        type: SET_CARD_TITLE_EDITING,
        board_id: board_id,
        list_id: list_id,
        card_id: card_id
    }
}

// save card title
export const SAVE_EDITED_CARD_TITLE = 'SAVE_EDITED_CARD_TITLE';
export const saveEditedCardTitle = (board_id, list_id, card_id, newTitle) => {
    return {
        type: SAVE_EDITED_CARD_TITLE,
        board_id: board_id,
        list_id: list_id,
        card_id: card_id,
        newTitle: newTitle
    }
}

// edit a card description
export const SET_CARD_DESCRIPTION_EDITING = 'SET_CARD_DESCRIPTION_EDITING';
export const setCardDescriptionEditing = (board_id, list_id, card_id) => {
    return {
        type: SET_CARD_DESCRIPTION_EDITING,
        board_id: board_id,
        list_id: list_id,
        card_id: card_id
    }
}

// save card description
export const SAVE_EDITED_CARD_DESCRIPTION = 'SAVE_EDITED_CARD_DESCRIPTION';
export const saveEditedCardDescription = (board_id, list_id, card_id, newDescription) => {
    return {
        type: SAVE_EDITED_CARD_DESCRIPTION,
        board_id: board_id,
        list_id: list_id,
        card_id: card_id,
        newDescription: newDescription
    }
}