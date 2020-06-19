import React from 'react';
import { getAllUserLists, getUserListByListId, getAllMovies } from '../api/movieClient';
import { Button } from 'reactstrap';
import { Movie } from '../models/Movie';


interface IUserListsComponentProps {
  userListsActionMapper: (userLists: any[]) => any;
  moviesUpdateActionMapper: (movies: Movie[]) => any;
  userLists: any[];
}

export class UserListsComponent extends React.Component<IUserListsComponentProps, any> {
  constructor(props: IUserListsComponentProps) {
    super(props);
    this.state = {value: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount()
  {
    try 
    {
      let allUserLists = await getAllUserLists();
      this.props.userListsActionMapper(allUserLists);
    }
    catch(e)
    {
      throw(e.message);
    }
    try 
    {
      let movies = await getAllMovies();
      this.props.moviesUpdateActionMapper(movies);
    }
    catch(e)
    {
      throw(e.message);
    }
  }

  handleChange(e: any) {
    this.setState({value: e.target.value});
  }

  async handleSubmit(e: any) {
    e.preventDefault();
    if (this.state.value === 0) {
      let movies = await getAllMovies();
      this.props.moviesUpdateActionMapper(movies);
      return;
    }
    let { movies } = await getUserListByListId(this.state.value);
    this.props.moviesUpdateActionMapper(movies);
  }


  render() {
    const userLists = this.props.userLists;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={0}>All Movies</option>
            {userLists.map((userList:any) => 
              <option 
              key={userList.userListId}
              value={userList.userListId}
              >
                {userList.listName}
              </option>)}
          </select>
          <input type="submit"/>
        </form>
      </>
    )
  }
}