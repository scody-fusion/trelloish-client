import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

export class CardComment extends React.Component {
  
  handleSubmit(e) {
    e.preventDefault();
    if (!this.commentText.value.trim()) {
    return
    };

    this.saveListTitleEdited(this.commentText.value);
    this.commentText.value = '' ;
}
  
  setCardCommentEditing() {
    this.props.setCardCommentEditing(this.props.card._id);
  };

  saveEditedCardComment(updatedComment) {
    this.props.saveEditedCardComment(this.props.card_id, updatedComment);
    // reset commentEditing to false
    this.setCardCommentEditing();
  };

  render() {
    console.log('comment props', this.props)
    let comment = (
      <p className="comment-text" onClick={() => this.setCardCommentEditing()}>
        {this.props.commentText}
      </p>
    );

    //if commentEditing, return a textInput
    if (this.props.commentEditing) {
      comment = (
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            defaultValue={this.props.commentText}
            ref={commentText => (this.commentText = commentText)}
          />
          <button type="submit">Done</button>
          <button type="button" onClick={e => this.setCardCommentEditing()}>
            Cancel
          </button>
        </form>
      );
    };

    return <div className="card-comment">{comment}</div>;
  };
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setCardCommentEditing: card_id =>
      dispatch(actions.setCardCommentEditing(card_id)),
    saveEditedCardComment: (card_id, updatedComment) =>
      dispatch(actions.saveEditedCardComment(card_id, updatedComment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardComment);
