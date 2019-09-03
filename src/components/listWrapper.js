import React from "react";
import { connect } from "react-redux";

import List from "../components/list";


export class ListWrapper extends React.Component {

  componentWillMount() {
    //fetch Lists
  }

  render() {
    console.log(this.props);
    const lists = this.props.lists.map((list, index) => (
      <List {...list} key={index} />
    ));

    return <div className="list-wrapper">{lists}</div>;
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists.lists
  };
};

export default connect(mapStateToProps)(ListWrapper);
