import React, {Component} from 'react'
import DogsImages from './DogsImages'
import request from 'superagent'

export default class DogsImagesContainer extends Component {
  state = { images: null }

  componentDidMount() {
    const breed = this.props.match.params.breed
    request
      .get(`https://dog.ceo/api/breed/${breed}/images/random/10`)
      .then(response => this.setImages(response.body.message))
      .catch(console.error)
  }

  setImages(images) {
    this.setState({
      images: images
    })
  }

  render() {
    return <div>
      <DogsImages images={ this.state.images } breed={this.props.match.params.breed}/>
      </div>
  }
}
