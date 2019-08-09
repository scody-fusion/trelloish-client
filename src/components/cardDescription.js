import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

export class CardDescription extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    if (!this.cardDescription.value.trim()) {
      return;
    }

    this.saveEditedCardDescription(this.cardDescription.value);
    this.cardDescription.value = "";
  }

  setCardDescriptionEditing() {
    this.props.setCardDescriptionEditing(this.props.card._id);
  }

  saveEditedCardDescription(editedDescription) {
    this.props.saveEditedCardDescription(
      this.props.card._id,
      editedDescription
    );
    // reset descriptionEditing to false
    this.setCardDescriptionEditing();
  }

  render() {
    let description = (
      <p
        className="card-description"
        onClick={() => this.setCardDescriptionEditing()}
      >
        {this.props.card.cardDescription}
      </p>
    );

    //if descriptionEditing, return a textInput
    if (this.props.card.cardDescriptionEditing) {
      description = (
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            defaultValue={this.props.card.cardDescription}
            ref={cardDescription => (this.cardDescription = cardDescription)}
          />
          <button type="submit">Done</button>
          <button type="button" onClick={e => this.setCardDescriptionEditing()}>
            Cancel
          </button>
        </form>
      );
    }

    return (
      <div className="card-description">
        <h3>Description:</h3>
        {description}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setCardDescriptionEditing: card_id =>
      dispatch(actions.setCardDescriptionEditing(card_id)),
    saveEditedCardDescription: (card_id, editedDescription) =>
      dispatch(actions.saveEditedCardDescription(card_id, editedDescription))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDescription);
