//import actions
import * as actionTypes from "../actions";

import update from "immutability-helper";

//set initial state
const initialState = {
  lists: [
    {
      _id: "11",
      listTitle: "List One",
      titleEditing: false,
      board: "1"
    }
  ]
};

const updateLists = (state, action) => {
  console.log(action);
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

const saveListTitleEdited = (state, action) => {
  //map through state to find and update correct list
  let updatedLists = findList(state.lists, action.list_id, list => {
    // save updatedTitle
    return update(list, { listTitle: { $set: action.editedTitle } });
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
export const listsReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.SET_LIST_TITLE_EDITING:
      return setListTitleEditing(state, action);
    case actionTypes.SAVE_LIST_TITLE_EDITED:
      return saveListTitleEdited(state, action);
    case actionTypes.CREATE_NEW_LIST:
      return createNewList(state, action);
    case actionTypes.UPDATE_LISTS: return updateLists(state, action)
    default:
      return state;
  }
};
