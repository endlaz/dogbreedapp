import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import GameOne from './components/GameOne'
import GameOneContainer from './components/GameOneContainer'
import initialComponent from './components/initialComponent'

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <section>
        <Route path="/games/game1" component={initialComponent} />
      </section>
      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;
