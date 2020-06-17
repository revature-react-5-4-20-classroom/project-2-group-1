//We're going to create interfaces that describe the state of our application
// and reducer(s) that are functions that take the prior state and an action
// and return the new state.

import { AnyAction, combineReducers } from "redux"
import { moviesTypes } from "./action-mappers"
import { calculateWinner } from './util'
import { Movie } from "../models/Movie"

// Our tictactoe state follows the state from our Game Component
export interface IMoviesState {
  //TODO: Do we want the focus movie?
  // movie: Movie;
  // movieId: number;
  movies: Movie[];
  userListId: number;
}

// Set up an initial state
const initialMovieState : IMoviesState = {
  //TODO: Do we want the focus movie?
  // movie: new Movie(1, 'tt0068646', 'The Godfather', 'R', '24 Mar 1972', '175 min', 'Fill in', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 9.2, 100, 'https://www.youtube.com/embed/sY1S34973zA', ['Crime', 'Drama'], ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard S. Castellano']),
  // movieId: 1,
  movies: [new Movie(1, 'tt0068646', 'The Godfather', 'R', '24 Mar 1972', '175 min', 'Fill in', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 9.2, 100, 'https://www.youtube.com/embed/sY1S34973zA', ['Crime', 'Drama'], ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard S. Castellano'])],
  userListId: 1,
}

export const moviesReducer = (state: IMoviesState=initialMovieState, action: AnyAction): IMoviesState => {
  switch(action.type) {
    //TODO: Do we want the focus movie?
    // case moviesTypes.MOVIE_GET_CLICK: {
    //   const { movieId } = action.payload;
    //   return {
    //     ...state,
    //     movieId
    //   }
    // }
    case moviesTypes.MOVIES_GET_CLICK: {
      const { userListId } = action.payload;
      console.log(userListId)
      return {
        ...state,
        userListId
      }
    }
    case moviesTypes.UPDATE_MOVIES: {
      const { movies } = action.payload;
      return {
        ...state,
        movies
      }
    }

    default:
      return state;
  }
}

//! LATER -------------------------------------------------------------------
// // Thus far we just have one reducer.  We're going to set this file
// // up to potentially use multiple reducers in the future.  We'd just
// // add them to the following interface and combineReducers function.

// // A second reducer:
// export interface IPlayerState {
//   players: string[];
// }

// const initialPlayerState: IPlayerState = {
//   players: ['Alice', 'Bob'],
// }

// export const playerReducer = (state:IPlayerState = initialPlayerState, action: AnyAction) => {
//   //not really necessary switch, since we have only one action type
//   switch(action.type) {
//     case playerTypes.SET_NAME: {
//       if(action.payload.player === 0 || action.payload.player === 1) {
//         //Make a copy of the players currently in state
//         const players = state.players.slice();
//         //Modify that copy, updating the appropriate player's name
//         players[action.payload.player] = action.payload.name;
//         //Return new state, including the modified copy just produced
//         return {
//           //not necessary default since only one property
//           ...state,
//           players: players
//         }
//       } else {
//         return state;
//       }
//     }
//     default:
//       return state;
//   }
// }
//! LATER -------------------------------------------------------------------

// interface for all of our state
export interface IState {
  movies: IMoviesState,
  // player: IPlayerState,
}

// Now all of our reducer(s) are in state, exported here.
// all actions can take place on state and they go to the
// appropriate reducer
export const state = combineReducers<IState>({
  movies: moviesReducer,
  // player: playerReducer,
})

