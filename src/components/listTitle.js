import React from "react";
import { connect } from "react-redux";

import "components/stylesheets/list.css";

import * as actions from "../actions";

export class ListTitle extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    if (!this.listTitle.value.trim()) {
      return;
    }

    this.saveListTitleEdited(this.listTitle.value);
    this.listTitle.value = "";
  }

  setListTitleEditing() {
    this.props.setListTitleEditing(this.props.list._id);
  }

  saveListTitleEdited(newTitle) {
    this.props.saveListTitleEdited(this.props.list._id, newTitle);
    // reset titleEditing to false
    this.setListTitleEditing();
  }

  render() {
    let title = (
      <h1 className="list-title" onClick={() => this.setListTitleEditing()}>
        {this.props.list.listTitle}
      </h1>
    );

    //if titleEditing, return a textInput
    if (this.props.list.titleEditing) {
      title = (
        <h1>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              defaultValue={this.props.list.listTitle}
              ref={listTitle => (this.listTitle = listTitle)}
            />
            <button type="submit">Done</button>
            <button type="button" onClick={e => this.setListTitleEditing()}>
              Cancel
            </button>
          </form>
        </h1>
      );
    }

    return <div className="list-title">{title}</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setListTitleEditing: list_id =>
      dispatch(actions.setListTitleEditing(list_id)),
    saveListTitleEdited: (list_id, newTitle) =>
      dispatch(actions.saveListTitleEdited(list_id, newTitle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTitle);
