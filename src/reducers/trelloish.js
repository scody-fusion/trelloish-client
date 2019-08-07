//import actions
import {UPDATE_BOARDS, SET_EDITING_LIST_TITLE, SAVE_EDITED_LIST_TITLE, CREATE_NEW_LIST, CREATE_NEW_CARD, SET_CARD_TITLE_EDITING, SAVE_EDITED_CARD_TITLE, SET_CARD_DESCRIPTION_EDITING, SAVE_EDITED_CARD_DESCRIPTION} from '../actions';

//set initial state
const initialState = {
    boards: [
        {
            _id: '1',
            title: 'board one',
            createdDate: 'today',
            createdBy: 'Sean',
            lastModified: 'today',
            description: 'description',
            lists: [
                {
                    _id: '1',
                    listTitle: 'List One',
                    titleEditing: false,
                    cards: [
                        {
                            _id: '1',
                            cardTitle: 'card one',
                            cardTitleEditing: false,
                            description: 'card description',
                            cardDescriptionEditing: false,
                            comments: [
                                {
                                    _id: '1',
                                    commentText: 'comment text',
                                    commentEditing: false
                                    // created date
                                    // created by
                                }
                            ]
                        }
                    ]
                }
        ]
    }]
};

// search through board for a list
const findList = (lists, list_id, callback) => {
    return lists.map((list, index) => {
                //return untargeted lists
                if (list_id !== list._id) {
                    return list
                } else {
                    return callback(list);
                }
            })

        }

// search through boards for a specific board
const findBoard = (boards, board_id, callback) => {
    return boards.map((board, index) => {
        // return untargeted boards
        if (board_id !== board._id) {
            return board
        } else {
            return callback(board)
        }
    })
}

// search through a list for a specific card
const findCard = (cards, card_id, callback) => {
    return cards.map((card, index) => {
        // return untargeted cards
        if (card_id !== card._id) {
            return card
        } else {
            return callback(card)
        }
    })
}

// reducer handles actions from /actions/index.js
//TODO: refactor all newState lines to be in separate function
export const trelloishReducer = (state = initialState, action) => {

    console.log(action);
    let newState = {};
    let updatedBoards;
    let updatedLists;
    let updatedCards;
    let newList;
    let newCard;

    switch (action.type) {

        case UPDATE_BOARDS:

            newState = {
                ...state,
                boards: action.boards
            }

            return newState;

        case SET_EDITING_LIST_TITLE:
        
            //TODO: refactor using promises to avoid callback hell
            //map through state to find and update correct list

            updatedBoards = findBoard(state.boards, action.board_id, (board) => {
                updatedLists = findList(board.lists, action.list_id, (list) => {
                    // toggle titleEditing
                    return {...list, titleEditing: !list.titleEditing}
                })
                return {...board, lists: updatedLists}

            })
            

            // insert modified board into newState
            newState = {
                ...state,
                boards: updatedBoards
            }

            console.log(newState);
            return newState;

        case SAVE_EDITED_LIST_TITLE:

            //map through state to find and update correct list
            updatedBoards = findBoard(state.boards, action.board_id, (board) => {
                updatedLists = findList(board.lists, action.list_id, (list) => {
                    // save newTitle
                    return {...list, listTitle: action.newTitle}
                })
                return {...board, lists: updatedLists}
            })            

            // insert modified board into newState
            newState = {
                ...state,
                boards: updatedBoards
            }

            console.log(newState);
            return newState;

        case CREATE_NEW_LIST:

            console.log('CREATE_NEW_LIST');
            updatedBoards = findBoard(state.boards, action.board_id, (board) => {
                // add a list to the board
                newList = {
                    _id: '2',
                    listTitle: action.listTitle,
                    titleEditing: false,
                    cards: []      
                }

                board.lists.push(newList);
                return board;

            })

            console.log('updatedBoards', updatedBoards);
            // insert modified board into newState
            newState = {
                ...state,
                boards: updatedBoards
            }

            console.log(newState);
            return newState;

        case CREATE_NEW_CARD:
            updatedBoards = findBoard(state.boards, action.board_id, (board) => {
                updatedLists = findList(board.lists, action.list_id, (list) => {
                    // add a card
                    newCard = {
                        cardTitle: action.cardTitle
                    }

                    list.cards.push(newCard)
                    return list;
                })
                return {...board, lists: updatedLists}

            })

            // insert modified board into newState
            newState = {
                ...state,
                boards: updatedBoards
            }

            console.log(newState);
            return newState;

        case SET_CARD_TITLE_EDITING:
        updatedBoards = findBoard(state.boards, action.board_id, (board) => {
            updatedLists = findList(board.lists, action.list_id, (list) => {
                updatedCards = findCard(list.cards, action.card_id, (card) => {
                    // toggle cardTitleEditing
                    return {...card, cardTitleEditing: !card.cardTitleEditing}
                })
                return {...list, cards: updatedCards}
            })
            return {...board, lists: updatedLists}
        })

        // insert modified board into newState
        newState = {
            ...state,
            boards: updatedBoards
        }

        console.log(newState);
        return newState;

        case SAVE_EDITED_CARD_TITLE:
        updatedBoards = findBoard(state.boards, action.board_id, (board) => {
            updatedLists = findList(board.lists, action.list_id, (list) => {
                updatedCards = findCard(list.cards, action.card_id, (card) => {
                    // save new crd title
                    return {...card, cardTitle: action.newTitle}
                })
                return {...list, cards: updatedCards}
            })
            return {...board, lists: updatedLists}
        })

        // insert modified board into newState
        newState = {
            ...state,
            boards: updatedBoards
        }

        console.log(newState);
        return newState;

        case SET_CARD_DESCRIPTION_EDITING:
        updatedBoards = findBoard(state.boards, action.board_id, (board) => {
            updatedLists = findList(board.lists, action.list_id, (list) => {
                updatedCards = findCard(list.cards, action.card_id, (card) => {
                    // toggle cardDescriptionEditing
                    return {...card, cardDescriptionEditing: !card.cardDescriptionEditing}
                })
                return {...list, cards: updatedCards}
            })
            return {...board, lists: updatedLists}
        })

        // insert modified board into newState
        newState = {
            ...state,
            boards: updatedBoards
        }

        console.log(newState);
        return newState;

        case SAVE_EDITED_CARD_DESCRIPTION:
        updatedBoards = findBoard(state.boards, action.board_id, (board) => {
            updatedLists = findList(board.lists, action.list_id, (list) => {
                updatedCards = findCard(list.cards, action.card_id, (card) => {
                    // save card description
                    return {...card, description: action.newDescription}
                })
                return {...list, cards: updatedCards}
            })
            return {...board, lists: updatedLists}
        })

        // insert modified board into newState
        newState = {
            ...state,
            boards: updatedBoards
        }

        console.log(newState);
        return newState;

        default:
            return state
    }
}
