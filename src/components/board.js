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

  //FIXME: pass correct props to board for rendering
  render() {
    console.log('board props', this.props.board);
    //query for lists that match board
    let lists = this.props.lists.filter((list, index) => {
        return list.board === this.props.board[0]._id
    });

    // FIXME: is the lists prop below needed
    return (
      <div className="board">
        <BoardHeader boardTitle={this.props.board.title} />
        <ListWrapper board={this.props.board._id} />
        <AddList board={this.props.board} />
      </div>
    );
  };
};

const mapStateToProps = (state, props) => {

  //filter using matching board to return to props

  const board = state.boards.boards.filter((board) => {
    return board._id ===  props.match.params.board_id
  })

  console.log(board[0]);

    return({
        board: board,
        lists: state.lists.lists
    });
};

export default connect(mapStateToProps)(Board);

