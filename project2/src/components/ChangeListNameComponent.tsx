import React from 'react';
import { Form, Label, Input, Button } from 'reactstrap';
import { User } from '../models/Users';
import { patchUserListName } from '../api/movieClient';

interface IChangeListNameComponentProps {
  listName: string,
  // loggedInUser: User,
  userListId: number,
  updateListName: (listName: string) => void,
}

export class ChangeListNameComponent extends React.Component<IChangeListNameComponentProps, any> {
  constructor(props: IChangeListNameComponentProps) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: any) {
    this.setState({value: e.target.value});
  }

  async handleSubmit(e: any) {
    e.preventDefault();
    let listName = this.state.value;
    if (listName === "" || listName === this.props.listName) {
      return;
    }
    console.log("patching movie");
    let numberMoviesPatched = 0;
    try 
    {
      numberMoviesPatched = await patchUserListName(listName, this.props.userListId);
      if (numberMoviesPatched !== 0) {
        this.setState({value: ""});
        this.props.updateListName(listName);
      }
    }
    catch(e) 
    {
      throw(e.message);
    }
  }
  render() {
    return (
      <>
        <Form md={{ size: 8, offset: 2}} onSubmit={this.handleSubmit}>

              <Label for="listName">List Name</Label>
              <Input
                  onChange={this.handleChange}
                  value={this.state.value}
                  type="text"
                  name="listName"
                  id="listName"
                  required
              />
              <Button>Change List Name</Button>
        </Form>
      </>
    )
  }
}