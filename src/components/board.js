import React from 'react';
import {connect} from 'react-redux';

import BoardHeader from '../components/boardHeader';
import AddList from '../components/addList';
import ListWrapper from 'components/listWrapper';
import { fetchBoards } from 'actions';

import 'components/stylesheets/board.css';

export class Board extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchBoards());
  }

  render() {
    console.log('board render // props:', this.props);
    
  //filter using matching board to return to props
  //FIXME: is there a cleaner refactor for this?
  const boardFilter = this.props.boards.filter((board) => {
    console.log('board._id:', board._id);
    return board._id === this.props.match.params.board_id
  })

  const board = boardFilter.length > 0 ? boardFilter[0] : {};

    return (
      <div className="board">
        <BoardHeader boardTitle={board.title} />
        <ListWrapper boardId={board._id} />
        <AddList board={board} />
      </div>
    );
  };
};

const mapStateToProps = (state) => {

    return{
        boards: state.boards.boards,
        lists: state.lists.lists
    };
};

export default connect(mapStateToProps)(Board);

