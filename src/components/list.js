import React from "react";
import { connect } from "react-redux";

import AddCard from "components/addCard";
import ListTitle from "components/listTitle";
import CardList from "components/cardList";

import "components/stylesheets/list.css";

export class List extends React.Component {
  
  //when I click on the list title, i can edit it
  // it has a field to add another card
  // it lists all of the active cards

  // FUTURE
  // it has a menu
  // review menu options on Trello

  render() {
    //query for cards that match board
    let cards = this.props.cards.filter((card, index) => {
      return card.list === this.props._id;
    });

    // console.log("cards", cards);

    return (
      <div className="list">
        <ListTitle list={this.props} />
        <CardList cards={cards} />
        <AddCard list={this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards
  };
};

export default connect(mapStateToProps)(List);
