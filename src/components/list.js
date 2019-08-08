import React from 'react'
import { connect } from 'react-redux'

import AddCard from 'components/addCard'
import ListTitle from 'components/listTitle'
import CardList from 'components/cardList'

//TODO: use *
// check Dustin screenshots
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
        
            return (
                <div className="list">
                <ListTitle board={this.props.board} list={this.props} />
                <CardList board = {this.props.board} list={this.props} />
                <AddCard listProps={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{}
};

export default connect(mapStateToProps)(List);


