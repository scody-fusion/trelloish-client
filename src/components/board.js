import React from 'react'
import {connect} from 'react-redux';

import List from '../components/list'
import BoardHeader from '../components/boardHeader'
import AddList from '../components/addList'

import 'components/stylesheets/board.css'

// actions

// components

//the board has a header

export function Board(props) {

    //TODO: complete this mapping
    const lists = props.boards[0].lists.map((list, index) => (
        <List {...list} key={index} board={props.boards[0]}/>
    ))

        return (
            <div className="board">
                <BoardHeader boardTitle={props.boards[0].title} />
                {lists}
                <AddList board={props.boards[0]} />
            </div>
        )
    }

const mapStateToProps = state => {
    return({
        boards: state.trelloish.boards
    })
}

export default connect(mapStateToProps)(Board)

