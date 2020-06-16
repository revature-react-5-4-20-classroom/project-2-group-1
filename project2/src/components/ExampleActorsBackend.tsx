import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

const SpringClient = axios.create({
  baseURL: 'http://localhost:8080/',
  //! Make this false when accessing our back end
  withCredentials: false,
})

class Actor {
  [k: string]: any;
  actorId: number; // primary key
  actorName: string; // not null, unique
  constructor(actorid: number, actorname: string) {
    this.actorId = actorid;
    this.actorName = actorname;
  }
}

async function queryActors(): Promise<any> {
  try {
    const res = await SpringClient.get('actors');
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e);
    console.log(e.response);
    if (e.response.status === 401) {
      throw new Error;
    } else {
      throw e;
    }
  }
}

interface IExampleActorsBackendState {
  actors: Actor[];
}

export class ExampleActorsBackend extends React.Component<any, IExampleActorsBackendState> {
  constructor(props: any) {
    super(props);
    this.state = {
      actors: [],
    }
  } 

  getActors = async (e:any) => {
    let actors: Actor[] = await queryActors();
    console.log(actors);
    this.setState({actors});
  }

  render() {
    return (
      <>
        <Button onClick={this.getActors}>Get Actors</Button>
        <ul>
          {this.state.actors.length > 0 ? this.state.actors.map(actor => <li key={actor.actorId}>{actor.actorName}</li>) : ""}
        </ul>
      </>
    )
  }
}