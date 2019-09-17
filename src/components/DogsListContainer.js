import React, { Component } from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux'

class DogsListContainer extends Component {
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
