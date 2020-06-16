//Specifying the action types that are possible in our movies application
export const moviesTypes = {
  MOVIES_GET_CLICK: 'MOVIES_GET_LIST',
  MOVIES_CURRENT_FOCUS: 'MOVIES_CURRENT_FOCUS'
}

// We want to make a query to a database when we receive this action
export const moviesClickActionMapper = (userListId: number) => {
  return {
    type: moviesTypes.MOVIES_GET_CLICK,
    payload: {
      userListId
    }
  }
}

export const movieClickActionMapper = (movieId: number) => {
  return {
    type: moviesTypes.MOVIES_CURRENT_FOCUS,
    payload: {
      movieId
    }
  }
}

//! Later =============================================================
// // We'll need to hook up that state and reducer to the store (IState interface and combineReducers)
// // We'll need to modify mapStateToProps for ReduxGame and pass ReduxGame our playernames as props
// // We'll need to modify ReduxGame to display those props.

// export const userTypes = {
//   SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

// export const setUserActionMapper = (username: string, pword: number) => {
//   return {
//     type: userTypes.SET_CURRENT_USER,
//     payload: {
//       username,
//       pword
//     }
//   }
// }