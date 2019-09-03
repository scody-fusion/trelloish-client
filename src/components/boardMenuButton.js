import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import {fetchBoards} from '../actions';

// components

export class BoardMenuButton extends React.Component {

    render() {
  
      return (


        
            <button><Link to={`/boards/${this.props._id}`}>{this.props.title}</Link></button>
          )
    }
  }

const mapStateToProps = state => {
    return({
    })
}

export default connect(mapStateToProps)(BoardMenuButton)

// return (
//   <button className="board-menu-button" onClick={(e) =>this.goToBoard(e)}>{this.props.title}</button>
// )