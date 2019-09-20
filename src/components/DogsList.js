import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class DogsList extends Component {
 

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
   
          {dogBreeds?
          <ul>{ dogBreeds.map(breed=> 
           <li key={breed}><Link to={ `/dog-breed/${breed}` }>{breed}</Link></li>)}</ul> : 'Loading...' }
      </div>
    )
  }
}
