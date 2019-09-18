import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogsList } from '../actions/dogs'

class GameThree extends Component {
    componentDidMount() {
        this.props.getDogsList();
    }

    render() { 
        return (<React.Fragment>
            <h1>Game 3</h1>
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
      dogsList: state.dogsList,
      gameThree: state.gameThree
    }
  }
  
  export default connect(mapStateToProps, { getDogsList })(GameThree)