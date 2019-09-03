import React from "react";
import { connect } from "react-redux";
import { fetchBoards } from "../actions";
import BoardList from 'components/boardList';

export class LandingPage extends React.Component {

  

  render() {

    return (
      <div className="board">
        <h2>LandingPage</h2>
        <BoardList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      boards: state.boards.boards
  };
};

export default connect(mapStateToProps)(LandingPage);
