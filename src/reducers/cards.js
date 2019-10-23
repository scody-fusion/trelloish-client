//import actions
import * as actionTypes from "../actions";

import update from "immutability-helper";

//set initial state
const initialState = {
  loadingCards: false,
  cards: []
};

const findCard = (cards, card_id, callback) => {
  return cards.map((card, index) => {
    // return untargeted cards
    if (card_id !== card._id) {
      return card;
    } else {
      return callback(card);
    }
  });
};

const updateCards = (state, action) => {
  const newState = update(state, { cards: { $set: action.cards } });
  return newState;
}

const setCardTitleEditing = (state, action) => {
  // find and update target card
  let updatedCards = findCard(state.cards, action.card_id, card => {
    return update(card, { titleEditing: { $set: !card.titleEditing } });
  });

  // update cards in state
  const newState = update(state, { cards: { $set: updatedCards } });
  return newState;
};

const setCardDescriptionEditing = (state, action) => {
  // find and update target card
  let updatedCards = findCard(state.cards, action.card_id, card => {
    return update(card, {
      cardDescriptionEditing: { $set: !card.cardDescriptionEditing }
    });
  });

  // update cards in state
  const newState = update(state, { cards: { $set: updatedCards } });
  return newState;
};

const fetchCardRequest = (state, action) => {

  const newState = update(state, { loadingCards: { $set: true } });
  return newState;
};

// reducer handles actions from /actions/index.js
export const cardsReducer = (state = [], action) => {
  // console.log("action", action);

  switch (action.type) {
    case actionTypes.SET_CARD_TITLE_EDITING:
      return setCardTitleEditing(state, action);
    case actionTypes.SET_CARD_DESCRIPTION_EDITING:
      return setCardDescriptionEditing(state, action);
    case actionTypes.UPDATE_CARDS: 
      return updateCards(state, action)
    case actionTypes.FETCH_CARD_REQUEST:
      return fetchCardRequest(state);
    default:
      return state;
  }
};
