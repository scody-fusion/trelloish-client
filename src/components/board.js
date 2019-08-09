import React from 'react';
import {connect} from 'react-redux';

import BoardHeader from '../components/boardHeader';
import AddList from '../components/addList';
import ListWrapper from 'components/listWrapper';

import 'components/stylesheets/board.css';

export class Board extends React.Component {
  render() {

    //query for lists that match board
    let lists = this.props.lists.filter((list, index) => {
        return list.board === this.props.board._id
    });

    return (
      <div className="board">
        <BoardHeader boardTitle={this.props.board.title} />
        <ListWrapper lists={lists} />
        <AddList board={this.props.board} />
      </div>
    );
  };
};

const mapStateToProps = state => {
    return({
        board: state.board.board,
        lists: state.lists.lists
    });
};

export default connect(mapStateToProps)(Board);

