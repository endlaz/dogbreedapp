import React, {Component} from 'react'
import DogsImages from './DogsImages'
import { connect } from 'react-redux'
import { getTenRandomBreedImages } from '../actions/dogs'

class DogsImagesContainer extends Component {
  componentDidMount() {
    const breed = this.props.match.params.breed
    this.props.getTenRandomBreedImages(breed);
  }

  render() {
    return <div>
      <DogsImages images={ this.props.dogDetails.images } breed={this.props.match.params.breed}/>
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    dogsList: state.dogsList,
    dogDetails: state.dogDetails
  }
}

export default connect(mapStateToProps, { getTenRandomBreedImages })(DogsImagesContainer)
