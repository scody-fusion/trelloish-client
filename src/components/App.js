import React from 'react';
import './stylesheets/App.css'

import BoardList from './boardList'
import Board from 'components/board'

function App() {

  return (
    <div className="App">
      <BoardList />
      <Board />
    </div>
  );
}

export default App;
