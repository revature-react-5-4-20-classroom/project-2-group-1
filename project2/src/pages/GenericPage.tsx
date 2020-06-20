import React from 'react';
import { Button } from 'reactstrap';
import { getUserListBy } from '../api/movieClient';
import { Movie } from '../models/Movie';

interface IGenericPageProps {
  moviesUpdateActionMapper: (movies: Movie[]) => any;
}
interface IGenericPageState {
  test: string;
}

export class GenericPage extends React.Component<IGenericPageProps, IGenericPageState> {
  constructor(props: IGenericPageProps) {
    super(props);
    this.state = {
      test: "test"
    }
  }

  getUserList = async (e: any) => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.value);
    // Serach for user list where user id === 2
    let { movies, listName, listOwner, userListId } = await getUserListBy(1);
    // Updates the userListId to 3
    console.log(listName);
    console.log(listOwner);
    this.props.moviesUpdateActionMapper(movies);
  }

  render() {
    return (
      <div className="page" id="genericPage">
        <h1>Generic Page</h1>
        <Button value={1} onClick={this.getUserList}>Get Updated Movies</Button>
      </div>
    )
  }
}