import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import "./stylesheets/App.css";

import BoardList from "./boardList";
import Board from "components/board";
import LandingPage from "./landing";

import * as actions from "../actions";

export class App extends React.Component {
  componentWillMount() {
    console.log('fetching boards from app');
    this.props.fetchBoards();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/boards/:board_id" component={Board} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBoards: () =>
      dispatch(actions.fetchBoards())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
