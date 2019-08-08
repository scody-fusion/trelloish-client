import React from 'react'
import { connect } from 'react-redux';

import { setCardTitleEditing, saveEditedCardTitle, setCardDescriptionEditing, saveEditedCardDescription } from 'actions'
import * as actions from 'actions'
import 'components/stylesheets/card.css'

import CardComment from 'components/cardComment'
import CardTitle from 'components/cardTitle'

export class Card extends React.Component {




    //TODO: later
    // shows comments (separate component)
    // shows activity (separate component)

    render() {

        //TODO: map through comments and render
        let comments;
        comments = this.props.comments.map((comment, index) => {
            return (
                <CardComment {...comment} key={index} />
                )
        })

        // if cardDescriptionEditing, return a text input
        let description;
        if (this.props.cardDescriptionEditing) {
            let input;
            description = 
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                    return
                    }
                    this.saveEditedCardDescription(input.value)
                    input.value = '' 
                    }}>
                <input type="text" defaultValue={this.props.description} ref={node => input = node} />
                    <button type="submit">Done</button>
                    <button type="button" onClick={(e) => this.editDescription()}>
                        Cancel
                    </button>
                </form>
        } else {
            description =
                <p className="card-description" onClick={() => this.editDescription()}>{this.props.description}</p>
            
        }

        return (
            <div className="card">
                <CardTitle card={this.props}/>
                <h3>Description:</h3>
                {description}
                {comments}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCardTitleEditing: (board_id, list_id, card_id) => setCardTitleEditing(board_id, list_id, card_id),
        saveEditedCardTitle: (board_id, list_id, card_id, newTitle) => saveEditedCardTitle(board_id, list_id, card_id, newTitle)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
