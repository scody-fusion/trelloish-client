import {API_BASE_URL} from '../config';

export const UPDATE_CARDS = 'UPDATE_CARDS';
export const updateCards = (cards) => {
    return {
        type: UPDATE_CARDS,
        cards: cards
    };
};

export const FETCH_CARD_REQUEST = 'FETCH_CARD_REQUEST';
export const fetchCardRequest = () => {
    return {
        type: FETCH_CARD_REQUEST
    }
}

export const fetchCards = () => dispatch => {
    // set state indicating request in progress
    // dispatch(fetchCardRequest());
    return fetch(`${API_BASE_URL}/cards`, {
            method: 'GET'
        })
        .then(res => {
            return res.json()
        })
        .then((cards) => {
            //rename to fetchCardsSuccess()???
            dispatch(updateCards(cards))
        })
        .catch(err => {
            //TODO: write this error 
            //FUTURE: error modal
            // dispatch(fetchCardsError(err));
        })
};

// create a new card
export const createNewCard = (list_id, cardTitle) => (dispatch) => {
    const data = {
        list: list_id,
        title: cardTitle,
        createdBy: 'user'
    };
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
export const saveEditedCardTitle = (card_id, editedTitle) => (dispatch) => {
    const data = {
        _id: card_id,
        title: editedTitle
    };
    return fetch(`${API_BASE_URL}/cards`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => dispatch(fetchCards()))
}

// edit a card description
export const SET_CARD_DESCRIPTION_EDITING = 'SET_CARD_DESCRIPTION_EDITING';
export const setCardDescriptionEditing = (card_id) => {
    return {
        type: SET_CARD_DESCRIPTION_EDITING,
        card_id: card_id
    };
};

// save card description
export const saveEditedCardDescription = (card_id, editedDescription) => (dispatch) => {
    const data = {
        _id: card_id,
        description: editedDescription
    };
    return fetch(`${API_BASE_URL}/cards`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => dispatch(fetchCards()))
}

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