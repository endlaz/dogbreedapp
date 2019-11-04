import React, {Component} from 'react'
import DogsImages from './DogsImages'
import { connect } from 'react-redux'
import { selectDog } from '../actions/dogsActions'

class DogsImagesContainer extends Component {
  componentDidMount() {
    const breed = this.props.match.params.breed
    this.props.selectDog(breed, 10);
  }

  render() {
    return <DogsImages images={ this.props.selectedDog.images } breed={this.props.match.params.breed}/>
  }
}

const mapStateToProps = (state) => {
  return {
    dogsList: state.dogsList,
    selectedDog: state.selectedDog
  }
}

export default connect(mapStateToProps, { selectDog })(DogsImagesContainer)
