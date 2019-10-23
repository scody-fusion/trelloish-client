//import actions
import * as actionTypes from "../actions";

import update from "immutability-helper";

//set initial state
const initialState = {
  lists: [
    // {
  ]
};

const updateLists = (state, action) => {
  const newState = update(state, { lists: { $set: action.lists } });
  return newState;
}

// search through board for a list
const findList = (lists, list_id, callback) => {
  return lists.map((list, index) => {
    //return untargeted lists
    if (list_id !== list._id) {
      return list;
    } else {
      return callback(list);
    }
  });
};

const setListTitleEditing = (state, action) => {
  // find and update target list
  let updatedLists = findList(state.lists, action.list_id, list => {
    return update(list, { titleEditing: { $set: !list.titleEditing } });
  });

  // update lists in state
  const newState = update(state, { lists: { $set: updatedLists } });
  return newState;
};

const createNewList = (state, action) => {
  let newList = {
    _id: "2",
    listTitle: action.listTitle,
    titleEditing: false,
    board: action.board_id
  };

  // update lists in state
  const newState = update(state, { lists: { $push: [newList] } });

  console.log(newState);
  return newState;
};

// reducer handles actions from /actions/index.js
export const listsReducer = (state = [], action) => {

  switch (action.type) {
    case actionTypes.SET_LIST_TITLE_EDITING:
      return setListTitleEditing(state, action);
    case actionTypes.UPDATE_LISTS: return updateLists(state, action)
    default:
      return state;
  }
};
