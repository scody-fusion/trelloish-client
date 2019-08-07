import React from 'react'
import { connect } from 'react-redux';

import { setCardTitleEditing, saveEditedCardTitle, setCardDescriptionEditing, saveEditedCardDescription } from 'actions'
import 'components/stylesheets/card.css'

import { CardComment } from 'components/cardComment'

export class Card extends React.Component {

    editTitle() {
        this.props.dispatch(setCardTitleEditing(this.props.listProps.board._id, this.props.listProps._id, this.props._id))
    }    
    
    saveEditedCardTitle(newTitle){
        this.props.dispatch(saveEditedCardTitle(this.props.listProps.board._id, this.props.listProps._id, this.props._id, newTitle))
        // reset titleEditing to false
        this.editTitle()
    }

    editDescription() {
        this.props.dispatch(setCardDescriptionEditing(this.props.listProps.board._id, this.props.listProps._id, this.props._id))
    }

    saveEditedCardDescription(newDescription){
        this.props.dispatch(saveEditedCardDescription(this.props.listProps.board._id, this.props.listProps._id, this.props._id, newDescription))
        // reset descriptionEditing to false
        this.editDescription()
    }

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

        //if cardtTitleEditing, return a textInput
        let title;
        if (this.props.cardTitleEditing) {
            let input;
            title = 
                <h1>
                    <form onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                        return
                        }

                        this.saveEditedCardTitle(input.value)
                        input.value = '' 
                        }}>
                    <input type="text" defaultValue={this.props.cardTitle} ref={node => input = node} />
                        <button type="submit">Done</button>
                        <button type="button" onClick={(e) => this.editTitle()}>
                            Cancel
                        </button>
                    </form>
                </h1>
            
        } else {
            title = <h1 className="list-title" onClick={() => this.editTitle()}>{this.props.cardTitle}</h1>
        }

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
                {title}
                <h3>Description:</h3>
                {description}
                {comments}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
    })
}

export default connect(mapStateToProps)(Card)