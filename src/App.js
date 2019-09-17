import React from 'react';
import './App.css';
import logo from './logo.svg'
import { Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import DogsListContainer from './components/DogsListContainer'
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
        <Route exact path="/dogslist" component={DogsListContainer} />
        <Route path="/dog-breed/:breed" component={DogImagesContainer} />
      </section>
      <footer className="footer">
        <p>Dog breed app</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
