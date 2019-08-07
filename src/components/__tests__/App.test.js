import React from 'react';
import App from '../App';
import BoardList from '../boardList'
import { shallow, mount } from 'enzyme'
import Root from 'Root'
import Board from 'components/board'

let wrapper;

beforeEach(() => {
  wrapper = mount(
      <Root>
          <App />
      </Root>
  );

})

//unmounting 'clean-up' required to avoid
//conflict between tests in the DOM
afterEach(() => {
  wrapper.unmount()
})

// it('renders without crashing', () => {
//   const wrapper = shallow(<App />);

// });

it('shows the boardList', () => {

  expect(wrapper.find(BoardList).length).toEqual(1)

})

it('shows the selected board', () => {
  
  expect(wrapper.find(Board).length).toEqual(1)

})

