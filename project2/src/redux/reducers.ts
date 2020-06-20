//We're going to create interfaces that describe the state of our application
// and reducer(s) that are functions that take the prior state and an action
// and return the new state.

import { AnyAction, combineReducers } from "redux"
import { moviesTypes } from "./action-mappers"
import { Movie } from "../models/Movie"

// Our tictactoe state follows the state from our Game Component
export interface IMoviesState {
  movies: Movie[];
  userLists: any[];
}

// Set up an initial state
const initialMovieState : IMoviesState = {
  movies: [new Movie(1, 'tt0068646', 'The Godfather', 'R', '24 Mar 1972', '175 min', 'Fill in', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 9.2, 100, 'https://www.youtube.com/embed/sY1S34973zA', ['Crime', 'Drama'], ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard S. Castellano'])],
  userLists: [],
}

export const moviesReducer = (state: IMoviesState=initialMovieState, action: AnyAction) => {
  console.log("inside the movies reducer")
  switch(action.type) {
    case moviesTypes.GET_USER_LISTS: {
      const { userLists } = action.payload;
      console.log(userLists)
      return {
        ...state,
        userLists
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

// interface for all of our state
export interface IState {
  moviesStore: IMoviesState,
  // player: IPlayerState,
}

// Now all of our reducer(s) are in state, exported here.
// all actions can take place on state and they go to the
// appropriate reducer
export const state = combineReducers<IState>({
  moviesStore: moviesReducer,
  // player: playerReducer,
})

