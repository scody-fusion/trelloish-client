import { updateBoards, UPDATE_BOARDS } from 'actions';

describe('updateBoards', () => {
    it('has the correct type', () => {
        const action = updateBoards();

        expect(action.type).toEqual(UPDATE_BOARDS);
    })

    it('has the correct payload', () => {
        const action = updateBoards({title: 'board title'});
        
        expect(action.boards).toEqual({title: 'board title'});
    })
})