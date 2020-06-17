import React from 'react';
import { Button } from 'reactstrap';

interface IGenericPageProps {
  onClick: (userListId: number) => any;
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
    console.log(e.currentTarget)
    this.props.onClick(3);
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