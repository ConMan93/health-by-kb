import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';


// Components
import Home from './components/Home';
import Exercises from './components/Exercises';
import Recipes from './components/Recipes';
import SuprSkrtLogin from './components/SuprSkrtLogin';
import Header from './components/Header';

class App extends Component {
  
  render() {
    
    return (
      <div>
        <HashRouter>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/secret' component={SuprSkrtLogin} />
            <Route path='/exercises' component={Exercises} />
            <Route path='/recipes' component={Recipes} />
          </Switch>
        </HashRouter> 
      </div>
    )
  }
}

export default App;
