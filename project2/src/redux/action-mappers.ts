import { Movie } from "../models/Movie"

//Specifying the action types that are possible in our movies application
export const moviesTypes = {
  // MOVIE_GET_CLICK: 'MOVIE_GET_CLICK',
  GET_USER_LISTS: 'GET_USER_LISTS',
  UPDATE_MOVIES: 'UPDATE_MOVIES'
}

//TODO: Do we want movie focus?
// // For changing movie id in the global state
// export const movieClickActionMapper = (movieId: number) => {
//   return {
//     type: moviesTypes.MOVIE_GET_CLICK,
//     payload: {
//       movieId
//     }
//   }
// }

// For changing user list id in the global state
export const userListsActionMapper = (userLists: any[]) => {
  console.log(userLists);
  return {
    type: moviesTypes.GET_USER_LISTS,
    payload: {
      userLists
    }
  }
}

export const moviesUpdateActionMapper = (movies: Movie[]) => {
  return {
    type: moviesTypes.UPDATE_MOVIES,
    payload: {
      movies
    }
  }
}

//

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