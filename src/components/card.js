import React from 'react';
import { connect } from 'react-redux';

import 'components/stylesheets/card.css';

import CardTitle from 'components/cardTitle';
import CardDescription from 'components/cardDescription';
import CommentList from 'components/commentList';

export class Card extends React.Component {


    //TODO: later
    // shows activity (separate component)

    render() {
        return (
            <div className="card">
                <CardTitle card={this.props}/>
                <CardDescription card={this.props} />
                <CommentList card={this.props} />
            </div>
        );
    };
};

const mapStateToProps = state => {
    return{
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
