import React from 'react'
import Card from 'components/card'
import AddCard from 'components/addCard'
import { connect } from 'react-redux'

import { setEditing, saveEditTitle } from 'actions'

import 'components/stylesheets/list.css'

export class List extends React.Component {

    //when I click on the list title, i can edit it
    // it has a field to add another card
    // it lists all of the active cards

    // FUTURE
    // it has a menu
        // review menu options on Trello

    //when I click on the list title, i can edit it
    editTitle() {

        this.props.dispatch(setEditing(this.props.board._id, this.props._id))
    }    

    saveEditTitle(newTitle){
        console.log(newTitle)

        this.props.dispatch(saveEditTitle(this.props.board._id, this.props._id, newTitle))

        // reset titleEditing to false
        this.editTitle()
    }

    render() {

        console.log('list props', this.props);

        //if titleEditing, return a textInput
        let title;
        if (this.props.titleEditing) {
            let input;
            title = 
                <h1>
                    <form onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                        return
                        }

                        this.saveEditTitle(input.value)
                        input.value = '' 
                        }}>
                    <input type="text" defaultValue={this.props.listTitle} ref={node => input = node} />
                        <button type="submit">Done</button>
                        <button type="button" onClick={(e) => this.editTitle()}>
                            Cancel
                        </button>
                    </form>
                </h1>
            
        } else {
            title = <h1 className="list-title" onClick={() => this.editTitle()}>{this.props.listTitle}</h1>
        }
        
        let cards = this.props.cards.map((card, index) => {
            return (
                <Card {...card} key={index} listProps={this.props} />
                )
            })
            
            return (
                <div className="list">
                {title}
                {cards}
                <AddCard listProps={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
    })
}

export default connect(mapStateToProps)(List)


