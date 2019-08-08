import React from "react";
import { connect } from "react-redux";

import "components/stylesheets/list.css";

import * as actions from "../actions";

export class CardDescription extends React.Component {
  editDescription() {
    this.props.setCardDescriptionEditing(
      this.props.listProps.board._id,
      this.props.listProps._id,
      this.props._id
    );
  }

  saveEditedCardDescription(newDescription) {
    this.props.saveEditedCardDescription(
      this.props.listProps.board._id,
      this.props.listProps._id,
      this.props._id,
      newDescription
    );
    // reset descriptionEditing to false
    this.editDescription();
  }

  render() {
    let description = (
      <p className="card-title" onClick={() => this.editDescription()}>
        {this.props.card.CardDescription}
      </p>
    );

    //if titleEditing, return a textInput
    if (this.props.card.titleEditing) {
      let input;
      title = (
        <h1>
          <form onSubmit={e => this.handleSubmit(e, input)}>
            <input
              type="text"
              defaultValue={this.props.card.cardTitle}
              ref={node => (input = node)}
            />
            <button type="submit">Done</button>
            <button type="button" onClick={e => this.editTitle()}>
              Cancel
            </button>
          </form>
        </h1>
      );

      return { title };
    }
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setCardDescriptionEditing: (board_id, list_id, card_id) =>
      dispatch(actions.setCardDescriptionEditing(board_id, list_id, card_id)),
    saveEditedCardDescription: (board_id, list_id, card_id, newDescription) =>
      dispatch(
        actions.saveEditedCardDescription(
          board_id,
          list_id,
          card_id,
          newDescription
        )
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDescription);
