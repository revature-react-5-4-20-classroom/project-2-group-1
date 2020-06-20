import React from 'react';
import axios from 'axios';

interface IExampleAPIFormsProps {

} 
interface IExampleAPIFormsState {

}

const OMDBClient = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  withCredentials: true,
})
// const ExpenseReimbursementClient = axios.create({
//   baseURL: 'http://3.16.109.242:3000',
//   withCredentials: true,
// });

async function getMovie(path: string): Promise<any> {
  try {
    const res = await OMDBClient.get(path);
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

export class ExampleOMDB extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
    }
  } 

  // https://www.youtube.com/embed/OXrcDonY-B8
  // https://www.youtube.com/watch?v=OXrcDonY-B8
  // userinput.split('watch?v=')
  // userinput[0] + "embed/" + userinput[1];
  // https://www.youtube.com/embed/sY1S34973zA
  
  // NOTE: You need to add a .env file to the root of react application (same folder as package.json)
  // Should have REACT_APP_OMDB_API_KEY="my-api-key" where "my-api-key" is the api key I can send over slack
  queryTitle = async (e: any)  => {
    e.preventDefault();
    let title = this.state.title
    title = title.trim().split(" ").join("%20");
    let pathToSearch = `?s=${title}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;
    let response = await getMovie(pathToSearch);
    console.log(response.data);
    // This is just guessing because I don't have routing set up to allow CORS
    let { Search, totalResults, Response } = response.data;
    let { imdbID } = Search[0] // response.data.Search[0] // If we want to cut out the next line
    let pathToIMDB = `?i=${title}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;
  }

  setInputState = (change: any) => {
    let { name, value } = change.currentTarget;
    this.setState({[name] : value})
  }

  render() {
    return (
      <>
        <form onSubmit={this.queryTitle}>
          <label>Title  </label>
          <input type="text" name="title" id="title" value={this.state.title} onChange={this.setInputState}>

          </input>
        </form>
      </>
    )
  }
}