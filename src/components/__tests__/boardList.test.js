import React from 'react';
import BoardList from 'components/boardList';
//used for full DOM rendering
import { mount } from 'enzyme'
import Root from 'Root';

//Normally, we would only do a shallow render,
// but we are using Full DOM rendering for practic

let wrapper;

beforeEach(() => {
    wrapper = mount(
        <Root>
            <BoardList />
        </Root>
    );

})

//unmounting 'clean-up' required to avoid
//conflict between tests in the DOM
afterEach(() => {
    wrapper.unmount()
})

describe('the button', () => {

    it('the button renders', () => {
    
        expect(wrapper.find('button').length).toEqual(1);
    
    }) 

    it('clicking the buttons triggers a fetch request', () => {

        wrapper.find('button').simulate('click').update() //force component update

        // a fetch request is triggered

        // there is a return object with boards
    })


})
