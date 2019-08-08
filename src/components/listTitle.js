import React from 'react'
import { connect } from 'react-redux'

import 'components/stylesheets/list.css'

import * as actions from '../actions';


export class ListTitle extends React.Component {

    handleSubmit(e, input) {
        e.preventDefault()

        if (!input.value.trim()) {
        return
        }

        this.saveEditTitle(input.value)
        input.value = '' 
    }

    editTitle() {
        this.props.setEditing(this.props.board._id, this.props.list._id)
    }    

    saveEditTitle(newTitle){
        this.props.saveEditTitle(this.props.board._id, this.props.list_id, newTitle)
        // reset titleEditing to false
        this.editTitle()
    }

    render() {

        let title = <h1 className="list-title" onClick={() => this.editTitle()}>{this.props.list.listTitle}</h1>
        
        //if titleEditing, return a textInput
        if (this.props.list.titleEditing) {
            let input;
            title = 
                <h1>
                    <form onSubmit={(e) => this.handleSubmit(e, input)}>
                    <input type="text" defaultValue={this.props.list.listTitle} ref={node => input = node} />
                        <button type="submit">Done</button>
                        <button type="button" onClick={(e) => this.editTitle()}>
                            Cancel
                        </button>
                    </form>
                </h1>
                
            return (
                {title}
            )
        }
    }   
}

const mapStateToProps = state => {
    return{}
};

const mapDispatchToProps = dispatch => {
    return {
        setEditing: (board_id, list_id) => dispatch(actions.setEditing(board_id, list_id)),
        saveEditTitle: (board_id, list_id, newTitle) => dispatch(actions.saveEditTitle(board_id, list_id, newTitle))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTitle);


