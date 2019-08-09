import React from "react";
import { connect } from "react-redux";

import CardComment from "components/cardComment";

export class CommentList extends React.Component {
  render() {
    let commentList = this.props.card.comments.map((comment, index) => {
      return <CardComment {...comment} key={index} card={this.props} />;
    });

    return (
      <div className="comment-list">
        {commentList}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
