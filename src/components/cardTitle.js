import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

export class CardTitle extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    if (!this.cardTitle.value.trim()) {
      return;
    }

    this.saveEditedCardTitle(this.cardTitle.value);
    this.cardTitle.value = "";
  }

  setEditingCardTitle() {
    this.props.setEditingCardTitle(this.props.card._id);
  }

  saveEditedCardTitle(newTitle) {
    this.props.saveEditedCardTitle(this.props.card._id, newTitle);
    // reset titleEditing to false
    this.setEditingCardTitle();
  }

  render() {
    let title = (
      <h1 className="card-title" onClick={() => this.setEditingCardTitle()}>
        {this.props.card.title}
      </h1>
    );

    //if titleEditing, return a textInput
    if (this.props.card.titleEditing) {
      title = (
        <h1>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              defaultValue={this.props.card.cardTitle}
              ref={cardTitle => (this.cardTitle = cardTitle)}
            />
            <button type="submit">Done</button>
            <button type="button" onClick={e => this.setEditingCardTitle()}>
              Cancel
            </button>
          </form>
        </h1>
      );
    }
    return <div className="card-title">{title}</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setEditingCardTitle: card_id =>
      dispatch(actions.setEditingCardTitle(card_id)),
    saveEditedCardTitle: (card_id, newTitle) =>
      dispatch(actions.saveEditedCardTitle(card_id, newTitle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardTitle);
