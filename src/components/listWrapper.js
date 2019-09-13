import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions'

import List from "../components/list";


export class ListWrapper extends React.Component {

  componentWillMount() {
    console.log('fetchLists in list');
    this.props.fetchLists();
  }

  render() {
    console.log('listWrapper props', this.props);

    //query for lists that match board
    let filteredLists = this.props.lists.filter((list, index) => {
      return list.board === this.props.boardId
    });

    // console.log('filteredLists', filteredLists);

    const renderedLists = filteredLists.map((list, index) => (
      <List {...list} key={index} />
    ));

    return <div className="list-wrapper">{renderedLists}</div>;
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists.lists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLists: () =>
      dispatch(actions.fetchLists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListWrapper);
