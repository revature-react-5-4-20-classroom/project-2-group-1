//Action mappers will contain functions that produce actions.
// We're using action mappers instead of actions directly because we're going to
// make it easy to work with redux-thunk.

//Specifying the action types that are possible in our TicTacToe game
export const tttTypes = {
  CELL_CLICK: 'TTT_CELL_CLICK',
  HISTORY_CLICK: 'TTT_HISTORY_CLICK',
}

//Write an action mapper that returns an action for clicking on a cell.
// Our action will have its type be CELL_CLICK and its payload contain the index of the cell
export const cellClickActionMapper = (cellIndex: number) => {
  return {
    type: tttTypes.CELL_CLICK,
    payload: {
      cellIndex
    }
  }
}

export const historyClickActionMapper = (step: number) => {
  return {
    type: tttTypes.HISTORY_CLICK,
    payload: {
      step
    }
  }
}

// Lets make it possible to set player names, and lets have player names show up in the ReduxGame.
// We'll start with the actions here.
// We'll need some state that contains player names.  A string[] is fine
// We'll need a reducer that takes state and our action and sets the players name
// We'll need to hook up that state and reducer to the store (IState interface and combineReducers)
// We'll need to modify mapStateToProps for ReduxGame and pass ReduxGame our playernames as props
// We'll need to modify ReduxGame to display those props.

// Once that's done, we'll need a new component that lets us modify the names in the Redux store

export const playerTypes = {
  SET_NAME: 'PLAYER_SET_NAME'
}

// This setup assumes each player has a number like player 1 or player 2
export const submitNameActionMapper = (name: string, player: number) => {
  return {
    type: playerTypes.SET_NAME,
    payload: {
      name,
      player
    }
  }
}