import React from 'react'
import {connect} from 'react-redux';

// actions
import BoardMenuButton from 'components/boardMenuButton';

// components

export class BoardList extends React.Component {

  
  render() {
      let boardList = this.props.boards.map((board, index) => {
        return <BoardMenuButton {...board} key={index} />;
      });
  
      return <div className="board-list">{boardList}</div>;
    }
  }

const mapStateToProps = state => {
    return({
        boards: state.boards.boards
    })
}

export default connect(mapStateToProps)(BoardList)