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
            // console.log('action boards',boards);
            dispatch(updateBoards(boards))
        })
};

export const UPDATE_LISTS = 'UPDATE_LISTS';
export const updateLists = (lists) => {
    return {
        type: UPDATE_LISTS,
        lists: lists
    };
};

export const fetchLists = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/lists`, {
            method: 'GET'
        })
        .then(res => {
            return res.json()
        })
        .then((lists) => {
            console.log('action lists',lists);
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
export const SAVE_LIST_TITLE_EDITED = 'SAVE_LIST_TITLE_EDITED';
export const saveListTitleEdited = (list_id, editedTitle) => {
    return {
        type: SAVE_LIST_TITLE_EDITED,
        list_id: list_id,
        editedTitle: editedTitle
    };
};

// create a new list
export const CREATE_NEW_LIST = 'CREATE_NEW_LIST';
export const createNewList = (board_id, listTitle) => {
    return {
        type: CREATE_NEW_LIST,
        board_id: board_id,
        listTitle: listTitle
    };
};

// create a new card
export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';
export const createNewCard = (list_id, cardTitle) => {
    return {
        type: CREATE_NEW_CARD,
        list_id: list_id,
        cardTitle: cardTitle
    };
};


// edit a card title
export const SET_CARD_TITLE_EDITING = 'SET_CARD_TITLE_EDITING';
export const setEditingCardTitle = (card_id) => {
    return {
        type: SET_CARD_TITLE_EDITING,
        card_id: card_id
    };
};

// save card title
export const SAVE_EDITED_CARD_TITLE = 'SAVE_EDITED_CARD_TITLE';
export const saveEditedCardTitle = (card_id, editedTitle) => {
    return {
        type: SAVE_EDITED_CARD_TITLE,
        card_id: card_id,
        editedTitle: editedTitle
    };
};

// edit a card description
export const SET_CARD_DESCRIPTION_EDITING = 'SET_CARD_DESCRIPTION_EDITING';
export const setCardDescriptionEditing = (card_id) => {
    return {
        type: SET_CARD_DESCRIPTION_EDITING,
        card_id: card_id
    };
};

// save card description
export const SAVE_EDITED_CARD_DESCRIPTION = 'SAVE_EDITED_CARD_DESCRIPTION';
export const saveEditedCardDescription = (card_id, editedDescription) => {
    return {
        type: SAVE_EDITED_CARD_DESCRIPTION,
        card_id: card_id,
        editedDescription: editedDescription
    };
};

// edit a card comment
export const SET_CARD_COMMENT_EDITING = 'SET_CARD_COMMENT_EDITING';
export const setCardCommentEditing = (card_id) => {
    return {
        type: SET_CARD_COMMENT_EDITING,
        card_id: card_id
    };
};

// save card comment
export const SAVE_EDITED_CARD_COMMENT = 'SAVE_EDITED_CARD_COMMENT';
export const saveEditedCardComment = (card_id, updatedComment) => {
    return {
        type: SAVE_EDITED_CARD_COMMENT,
        card_id: card_id,
        updatedComment: updatedComment
    };
};