import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Main from './Components/Main';
import Footer from './Components/Footer'
import Notify from './Components/Notify';

class App extends Component {
  state = {
    loading: true
  }
  render() {
    return (

      <BrowserRouter>
        <div className="App">
        <Route exact path='/' component={Main} />
          <Switch>
            <Route exact path='/more' component={Notify} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
