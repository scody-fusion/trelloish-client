import {API_BASE_URL} from '../config';

export const UPDATE_CARDS = 'UPDATE_CARDS';
export const updateCards = (cards) => {
    return {
        type: UPDATE_CARDS,
        cards: cards
    };
};

export const fetchCards = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/cards`, {
            method: 'GET'
        })
        .then(res => {
            return res.json()
        })
        .then((cards) => {
            dispatch(updateCards(cards))
        })
};

// create a new card
export const createNewCard = (list_id, cardTitle) => (dispatch) => {
    const data = {
        list: list_id,
        title: cardTitle,
        createdBy: 'user'
    };
    console.log(data);
    return fetch(`${API_BASE_URL}/cards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => dispatch(fetchCards()))
}


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