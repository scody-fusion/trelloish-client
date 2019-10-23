import React from 'react';
import Board from 'components/board';
import { shallow, mount } from 'enzyme'
import Root from 'Root';
import List from 'components/list'

let wrapper;



beforeEach(() => {
    const initialState = {
        boards: {
            boards: [
                {
                    _id: '1',
                    title: 'test board 1',
                    createdDate: 'Mon Aug 12 2019 11:05:10 GMT-0400',
                    createdBy: 'test user',
                    lastModified: 'Mon Aug 12 2019 11:05:10 GMT-0400',
                    description: 'test board 1 description',
                },
                // {
                //     _id: '2',
                //     title: 'test board 2',
                //     createdDate: 'Mon Aug 12 2019 11:05:10 GMT-0400',
                //     createdBy: 'test user',
                //     lastModified: 'Mon Aug 12 2019 11:05:10 GMT-0400',
                //     description: 'test board 2 description',
                // }
            ]
        },
        cards: {
            cards: []
        },
        lists: {
            lists: []
        }
    };

    // hardcode routing
    const board_id = {match: {params: {board_id: '1'}}};


    wrapper = mount(
        // pass an initial state to the root component
        <Root initialState={initialState}>
            <Board {...board_id}/>
        </Root>
    );
})

afterEach(() => {
    wrapper.unmount();
})

it('renders the Board without crashing', () => {

}) 

describe('board tests', () => {

    it('dispatches a fetchBoard action on mounting', () => {
        // simulate mounting
        // expect an action that includes fetchBoard
    })

    it('returns the board based on the match params', () => {
        // expect board title to match board id
        const board = wrapper.find('Board');
        const boardId = board.prop('boards')[0]._id;
        expect(boardId).toEqual('1')
    })

})