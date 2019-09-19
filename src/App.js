import React from 'react';
import './App.css';
import logo from './logo.svg'
import { Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import GameOne from './components/GameOne'
import GameOneContainer from './components/GameOneContainer'
import initialComponent from './components/initialComponent'
import DogsListContainer from './components/DogsListContainer'
import GameTwoComponent from './components/GameTwoComponent'
import DogImagesContainer from './components/DogsImagesContainer'
import FrontPage from './components/frontpage'


function App() {
  return (
    <React.Fragment>
      <header className="header">
        <Link to="/" className="logo-link"><img src={logo} className="app-logo" alt="logo" /></Link>
        <Navbar />
      </header>
      <section className="content">
        <Route exact path="/" component={FrontPage} />
        <Route path="/games/game1" component={initialComponent} />
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

export default App;
