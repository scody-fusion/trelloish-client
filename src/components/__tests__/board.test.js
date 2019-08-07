import React from 'react';
import Board from 'components/board';
import { shallow } from 'enzyme'
import Root from 'Root';
import List from 'components/list'

let wrapper;

beforeEach(() => {
    wrapper = shallow(
        <Root>
            <Board />
        </Root>
    );

})

it('renders the Board without crashing', () => {

}) 

//TODO: this test is not working
// Finish more testing training to work on
it('if there are lists in state, then they are rendered', () => {
    // how do I write this to include the case of being no lists?
    expect(wrapper.find('.list').length).toBeGreaterThanOrEqual(1)

})