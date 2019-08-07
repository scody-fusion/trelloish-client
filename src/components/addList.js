import React from 'react'
import { connect } from 'react-redux'

import 'components/stylesheets/list.css'

import { createNewList } from '../actions'

export class addList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        //TODO: what does this line do?
        // this.onSubmit = this.onSubmit.bind(this);
    }

    // user stories
    // user sees a button to add a list

    handleClick() {
        this.setState({
            editing: true
        });
    }

    // when a user clicks DONE
    // 1 - a new list is created and saved
    handleSave(listTitle) {
        console.log('handleSave', listTitle);

        //dispatch an action to create a new List
        this.props.dispatch(createNewList(this.props.board._id, listTitle))

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
                <input type="text" defaultValue="new list" ref={node => input = node} />
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
                    <button type="submit">Add List</button>
                </form>
            

        }  

        return addForm;
    }
}

const mapStateToProps = state => {
    return({
    })
}

export default connect(mapStateToProps)(addList)

