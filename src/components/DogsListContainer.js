import React, { Component } from 'react'
import request from 'superagent'
import DogsList from './DogsList'
import { connect } from 'react-redux'

class DogsListContainer extends Component {
 

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
    return <DogsList dogBreeds={this.props.dogsList} />
  }
}

const mapStateToProps = (state) => {
  return {
    dogsList: state.dogsList
  }
}

export default connect(mapStateToProps)(DogsListContainer)
