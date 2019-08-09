import React from 'react'
import {connect} from 'react-redux';

// actions
import {fetchBoards} from '../actions'

// components

export class BoardList extends React.Component {

    componentDidMount(){

        // this.props.dispatch(fetchBoards())

    }

    // for development 
    fetchBoards = () => {
        console.log('click fetch')
        this.props.dispatch(fetchBoards())
    }

    render(){

        // let boards = this.props.boards.map((board, index) => (
        //     <li key={index}>{board.title}</li>
        // ))

        return (
            <div>
                <h1>Board List</h1>
                <button onClick={this.fetchBoards}>Fetch Boards</button>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        board: state.board.board
    })
}

export default connect(mapStateToProps)(BoardList)