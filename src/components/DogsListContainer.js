import React, { Component } from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux'
import { getDogsList } from '../actions/dogs'

class DogsListContainer extends Component {
  componentDidMount() {
    this.props.getDogsList();
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

export default connect(mapStateToProps, { getDogsList })(DogsListContainer)
