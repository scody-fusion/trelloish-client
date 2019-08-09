import React from "react";
import { connect } from "react-redux";

import "components/stylesheets/card.css";

import * as actions from '../actions';

export class addCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    //TODO: what does this line do?
    // this.onSubmit = this.onSubmit.bind(this);
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({
      editing: true
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    if (!this.cardTitle.value.trim()) {
      return;
    };
    this.handleSave(this.cardTitle.value);
    this.cardTitle.value = "";
  };

  handleSave(cardTitle) {
    this.props.createNewCard(this.props.list._id, cardTitle);
    this.setState({
      editing: false
    });
  };

  cancelCreate() {
    this.setState({
      editing: false
    });
  };

  render() {
    let addForm = (
      <form
        onSubmit={e => {
          this.handleClick(e);
        }}
      >
        <button type="submit">Add Card</button>
      </form>
    );
    if (this.state.editing) {
      addForm = (
        <h1>
          <form
            onSubmit={e => {
              this.handleSubmit(e);
            }}
          >
            <input
              type="text"
              defaultValue="new card"
              ref={cardTitle => (this.cardTitle = cardTitle)}
            />
            <button type="submit">Done</button>
            <button type="button" onClick={e => this.cancelCreate()}>
              Cancel
            </button>
          </form>
        </h1>
      );
    }

    return <div className="add-card-form">{addForm}</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    createNewCard: (list_id, cardTitle) =>
      dispatch(actions.createNewCard(list_id, cardTitle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addCard);
