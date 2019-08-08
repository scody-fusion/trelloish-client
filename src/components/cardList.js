import React from "react";
import { connect } from "react-redux";

import "components/stylesheets/list.css";

import * as actions from "../actions";

import Card from "components/card";

export class CardList extends React.Component {
  render() {
    let cardList = this.props.cards.map((card, index) => {
      return <Card {...card} key={index} listProps={this.props} />;
    });

    return (
        {cardList}
    )
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps)(CardList);
