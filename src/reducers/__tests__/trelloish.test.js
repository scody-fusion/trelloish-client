import trelloishReducer from 'reducers/trelloish';
import { UPDATE_BOARDS } from 'actions';

it('handles actions of type UPDATE_BOARDS', () => {
    const action = {
        type: UPDATE_BOARDS,
        boards: [{title: 'board title'}]
    };

    const newState = trelloishReducer({boards: []}, action);

    expect(newState).toEqual({boards: [{title: 'board title'}]});
});

it('handles action with unknown type', () => {
    // const newState = commentsReducer([], {}) 

    // expect(newState).toEqual([]);
})