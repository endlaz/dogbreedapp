import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/">Home</Link>
                <Link to="/games/game1">Game 1</Link>
                <Link to="/games/game2">Game 2</Link>
                <Link to="/dogslist">Dogslist</Link>
            </React.Fragment>
        );
    }
}

export default Navbar;