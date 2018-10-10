import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import { fire, getFireDB } from './shared/Firebase';
import FirstPage from './Firstpage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      memo: []
    };
    fire();
  }

  componentDidMount() {
    getFireDB()
    .then(res =>{
      this.setState({
        memo : res.val().memos
      })
    });
  }

  render() {
    const { memo } = this.state;
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" render={()=><FirstPage memo={memo}/>}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
