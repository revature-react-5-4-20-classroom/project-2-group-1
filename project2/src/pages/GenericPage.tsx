import React from 'react';
import { Button } from 'reactstrap';
import { getUserListBy } from '../api/movieClient';

interface IGenericPageProps {
  moviesClickActionMapper: (userListId: number) => any;
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

  getUserList = (e: any) => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.value);
    getUserListBy(1);
    this.props.moviesClickActionMapper(3);
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