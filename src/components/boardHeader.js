import React from 'react';
// import 'components/stylesheets/boardHeader.css'

// it includes the board title

// FUTURE
// it allows starring
// it reveals the board menu
// see other features in Trello

export default function BoardHeader(props) {

        return (
            <div className="board-header">
                <h1 className="board-title">{props.boardTitle}</h1>
            </div>
        );
};


