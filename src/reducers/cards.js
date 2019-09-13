//import actions
import * as actionTypes from "../actions";

import update from "immutability-helper";

//set initial state
const initialState = {
  cards: [
    {
      _id: "111",
      cardTitle: "card one",
      cardTitleEditing: false,
      cardDescription: "card description",
      cardDescriptionEditing: false,
      list: "11",
      comments: [
        {
          _id: "1",
          commentText: "comment text",
          commentEditing: false
          // created date
          // created by
        }
      ]
    }
  ]
};

const updateCards = (state, action) => {
  const newState = update(state, { cards: { $set: action.cards } });
  return newState;
}

// search through a list for a specific card
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

const createNewCard = (state, action) => {
  let newCard = {
    _id: "2",
    cardTitle: action.cardTitle,
    cardTitleEditing: false,
    cardDescription: "",
    cardDescriptionEditing: false,
    list: action.list_id,
    comments: []
  };

  // update cards in state
  const newState = update(state, { cards: { $push: [newCard] } });
  return newState;
};

const setCardTitleEditing = (state, action) => {
  // find and update target card
  let updatedCards = findCard(state.cards, action.card_id, card => {
    return update(card, { titleEditing: { $set: !card.titleEditing } });
  });

  // update cards in state
  const newState = update(state, { cards: { $set: updatedCards } });
  return newState;
};

const saveCardTitleEdited = (state, action) => {
  //map through state to find and update correct card
  let updatedCards = findCard(state.cards, action.card_id, card => {
    // save updatedTitle
    return update(card, { cardTitle: { $set: action.editedTitle } });
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

const saveCardDescriptionEdited = (state, action) => {
  console.log(action);
  //map through state to find and update correct card
  let updatedCards = findCard(state.cards, action.card_id, card => {
    // save updatedDescription
    return update(card, {
      cardDescription: { $set: action.editedDescription }
    });
  });

  // update cards in state
  const newState = update(state, { cards: { $set: updatedCards } });
  return newState;
};

// reducer handles actions from /actions/index.js
export const cardsReducer = (state = initialState, action) => {
  console.log("action", action);

  switch (action.type) {
    case actionTypes.CREATE_NEW_CARD:
      return createNewCard(state, action);
    case actionTypes.SET_CARD_TITLE_EDITING:
      return setCardTitleEditing(state, action);
    case actionTypes.SAVE_EDITED_CARD_TITLE:
      return saveCardTitleEdited(state, action);
    case actionTypes.SET_CARD_DESCRIPTION_EDITING:
      return setCardDescriptionEditing(state, action);
    case actionTypes.SAVE_EDITED_CARD_DESCRIPTION:
      return saveCardDescriptionEdited(state, action);
    case actionTypes.UPDATE_CARDS: return updateCards(state, action)
    default:
      return state;
  }
};
