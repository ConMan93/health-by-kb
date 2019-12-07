import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { userLoggedIn } from './Redux/reducer';


// Components
import Header from './components/Header';
import Home from './components/Home';
import Exercises from './components/Exercises';
import Post from './components/Post';
import Recipes from './components/Recipes';
import SuprSkrtLogin from './components/SuprSkrtLogin';
import Motivation from './components/Motivation';
import Blog from './components/Blog';
import About from './components/About';

class App extends Component {

  state = {
    loading: true,
  }

  componentDidMount() {
    axios.get('/auth/currentuser').then( response => {
      if (response.data) {
        this.props.userLoggedIn(response.data)
      }
    })

    this.setState({
      loading: false
    })
  }
  
  render() {
    // console.log(this.props)
    return (
      <div className="body-container">
      {this.state.loading ?
      <div></div>
      : 
        <HashRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/secret' component={SuprSkrtLogin} />
            <Route path='/exercises' component={Exercises} />
            <Route path='/recipes' component={Recipes} />
            <Route path='/post' component={Post} />
            <Route path='/blogs' component={Blog} />
            <Route path='/motivations' component={Motivation} />
            <Route path='/about' component={About} />
          </Switch>
        </HashRouter>} 
      </div>
    )
  }
}

export default connect(null, { userLoggedIn })(App);
