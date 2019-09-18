import React, {Component} from 'react'
import DogsImages from './DogsImages'
import { connect } from 'react-redux'
import { getRandomImages } from '../actions/dogs'

class DogsImagesContainer extends Component {
  componentDidMount() {
    const breed = this.props.match.params.breed
    this.props.getRandomImages(breed, 10);
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

export default connect(mapStateToProps, { getRandomImages })(DogsImagesContainer)
