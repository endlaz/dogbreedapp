import React from 'react';
import './App.css';
import logo from './logo.svg'
import { Route, Link } from 'react-router-dom'
import GameOne from './components/GameOne'
import DogsListContainer from './components/DogsListContainer'
import GameTwo from './components/GameTwo'
import DogImagesContainer from './components/DogsImagesContainer'
import FrontPage from './components/frontpage'


function App() {
  return (
    <React.Fragment>
      <header className="header">
        <Link to="/" className="logo-link"><img src={logo} className="app-logo" alt="logo" /></Link>
        <Link to="/">Home</Link>
        <Link to="/games/game1">Game 1</Link>
        <Link to="/games/game2">Game 2</Link>
        <Link to="/dogslist">Dogslist</Link>
      </header>
      <main className="content">
        <Route exact path="/" component={FrontPage} />
        <Route path="/games/game1" component={GameOne} />
        <Route exact path="/dogslist" component={DogsListContainer} />
        <Route path="/dog-breed/:breed" component={DogImagesContainer} />
        <Route exact path="/games/game2" component={GameTwo} />
      </main>
      <footer className="footer">
        <p>Dog breed app</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
