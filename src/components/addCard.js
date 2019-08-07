import React from 'react'
import { connect } from 'react-redux'

import 'components/stylesheets/card.css'

import { createNewCard } from '../actions'

export class addCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        //TODO: what does this line do?
        // this.onSubmit = this.onSubmit.bind(this);
    }

    // user stories
    // user sees a button to add a card

    handleClick() {
        console.log('handleClick')
        this.setState({
            editing: true
        });
    }

    // when a user clicks DONE
    // 1 - a new list is created and saved
    handleSave(cardTitle) {

        //dispatch an action to create a new Card
        this.props.dispatch(createNewCard(this.props.listProps.board._id, this.props.listProps._id, cardTitle))

        this.setState({
            editing: false
        })
    }

    cancelCreate() {
        this.setState({
            editing: false
        })
    }

    render() {

        let addForm;
        let input;
        if (this.state.editing) {
            addForm = 
            <h1>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                    return
                    }
                    this.handleSave(input.value)
                    input.value = '' 
                    }}>
                <input type="text" defaultValue="new card" ref={node => input = node} />
                    <button type="submit">Done</button>
                    <button type="button" onClick={(e) => this.cancelCreate()}>
                        Cancel
                    </button>
                </form>
            </h1>

        } else {
            addForm = 
                <form onSubmit={e => {
                    e.preventDefault()
                    this.handleClick()
                }}>
                    <button type="submit">Add Card</button>
                </form>
            

        }  

        return addForm;
    }
}

const mapStateToProps = state => {
    return({
    })
}

export default connect(mapStateToProps)(addCard)

