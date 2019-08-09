import React from "react";
import { connect } from "react-redux";

import "components/stylesheets/list.css";

import Card from "components/card";

export class CardList extends React.Component {
  render() {
    let cardList = this.props.cards.map((card, index) => {
      return <Card {...card} key={index} listProps={this.props} />;
    });

    return <div className="card-list">{cardList}</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
