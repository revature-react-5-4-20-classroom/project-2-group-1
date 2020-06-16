//We're going to create interfaces that describe the state of our application
// and reducer(s) that are functions that take the prior state and an action
// and return the new state.

import { AnyAction, combineReducers } from "redux"
import { moviesTypes } from "./action-mappers"
import { calculateWinner } from './util'
// import { Movie } from "../models/Movie"

// Our tictactoe state follows the state from our Game Component
export interface IMoviesState {
  movies: string; //Movie[];
  focusMovie: number;
}

// Set up an initial state
const initialMovieState : IMoviesState = {
  // We are going to store movies in an array. This is a single movie you should be able to build around this.
  movies: "movie"
  // movies: [new Movie(1, 'tt0068646', 'The Godfather', 'R', '24 Mar 1972', '175 min', 'Fill in', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 9.2, 100, 'https://www.youtube.com/embed/sY1S34973zA', ['Crime', 'Drama'], ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard S. Castellano'])],
  focusMovie: 1,
}

//Write a reducer for ttt state. MUST BE PURE!
// takes TTT state and an action, returhs TTT state
// initial state is default if no state is provided
// this function needs to specify how actions produce new state
export const moviesReducer = (state: IMoviesState=initialMovieState, action: AnyAction): IMoviesState => {
  switch(action.type) {
    // case moviesTypes.MOVIES_GET_CLICK: {
    //   const history = state.history.slice(0, state.stepNumber + 1);
    //   const current = history[history.length - 1];
    //   const squares = current.squares.slice();

    //   const cellIndex = action.payload.cellIndex;
    //   if ( || squares[cellIndex]) {
    //     // leave state unchaged
    //     return state;
    //   } else {
    //     //This modification is OK because squares is a copy, not part of state
    //     squares[cellIndex] = state.xIsNext ? 'X' : 'O';
    //     // return new state
    //     return {
    //       history: history.concat([{
    //         squares: squares
    //       }]),
    //       stepNumber: history.length,
    //       xIsNext: !state.xIsNext
    //     }
    //   }
    // }
    // case moviesTypes.MOVIES_GET_CLICK: {
    //   const step = action.payload.step;
    //   //using ...state will leave properties that arent
    //   // specified unchanged.  ie this wont change history
    //   return {
    //     ...state,
    //     stepNumber: step,
    //     xIsNext: (step % 2) === 0
    //   }
    // }
    // dont change state if invalid action type
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

