import React from 'react';
import {connect} from 'react-redux';

import BoardHeader from '../components/boardHeader';
import AddList from '../components/addList';
import ListWrapper from 'components/listWrapper';
import { fetchBoards } from 'actions';

import 'components/stylesheets/board.css';

export class Board extends React.Component {

  componentWillMount() {
    // console.log('fetchBoards in boards');
    this.props.dispatch(fetchBoards());
  }

  render() {
    // console.log('board props', this.props.board);
    

    // FIXME: is the lists prop below needed
    return (
      <div className="board">
        <BoardHeader boardTitle={this.props.board.title} />
        <ListWrapper boardId={this.props.board._id} />
        <AddList board={this.props.board} />
      </div>
    );
  };
};

const mapStateToProps = (state, props) => {

  //filter using matching board to return to props
  console.log('props.match.params', props.match);

  const board = state.boards.boards.filter((board) => {
    // console.log(board._id, props.match.params.board_id);
    // console.log(board._id === props.match.params.board_id);
    return board._id === props.match.params.board_id
  })

  // console.log(board);

    return({
        board: board[0],
        lists: state.lists.lists
    });
};

export default connect(mapStateToProps)(Board);

