import React from 'react';
import './App.css';
import logo from './logo.svg'
import { Route, Link } from 'react-router-dom'
import request from 'superagent'
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import DogsListContainer from './components/DogsListContainer'
import GameTwoComponent from './components/GameTwoComponent'
import DogImagesContainer from './components/DogsImagesContainer'
import FrontPage from './components/frontpage'

class App extends React.Component {
  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        this.props.dispatch({
          type: 'SET_DOGSLIST',
          payload: Object.keys(response.body.message)
        })
      })
      .catch(console.error)
  }

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <Link to="/" className="logo-link"><img src={logo} className="app-logo" alt="logo" /></Link>
          <Navbar />
        </header>
        <section className="content">
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/dogslist" component={DogsListContainer} />
          <Route path="/dog-breed/:breed" component={DogImagesContainer} />
          <Route exact path="/games/game2" component={GameTwoComponent} />
        </section>
        <footer className="footer">
          <p>Dog breed app</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default connect()(App)