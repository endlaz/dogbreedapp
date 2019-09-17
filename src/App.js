import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DogsListContainer from './components/DogsListContainer'
import DogImagesContainer from './components/DogsImagesContainer'

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <section>
      <Route exact path="/dogslist" component={DogsListContainer} />
      <Route path="/dog-breed/:breed" component={DogImagesContainer} />

      </section>
      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;
