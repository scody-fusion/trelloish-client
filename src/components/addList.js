import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

export class addList extends React.Component {
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
    if (!this.listTitle.value.trim()) {
      return;
    };
    this.handleSave(this.listTitle.value);
    this.listTitle.value = "";
  };

  handleSave(listTitle) {
    this.props.createNewList(this.props.board._id, listTitle);
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
        <button type="submit">Add List</button>
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
              defaultValue="new list"
              ref={listTitle => (this.listTitle = listTitle)}
            />
            <button type="submit">Done</button>
            <button type="button" onClick={e => this.cancelCreate()}>
              Cancel
            </button>
          </form>
        </h1>
      );
    };

    return <div className="add-list-form">{addForm}</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    createNewList: (board_id, newTitle) =>
      dispatch(actions.createNewList(board_id, newTitle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addList);
