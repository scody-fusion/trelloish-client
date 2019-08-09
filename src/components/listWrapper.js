import React from "react";
import { connect } from "react-redux";

import List from "../components/list";

import "components/stylesheets/board.css";

export class ListWrapper extends React.Component {
  render() {
    const lists = this.props.lists.map((list, index) => (
      <List {...list} key={index} />
    ));

    return <div className="list-wrapper">{lists}</div>;
  }
}

const mapStateToProps = state => {
  return {
    boards: state.board.board
  };
};

export default connect(mapStateToProps)(ListWrapper);
