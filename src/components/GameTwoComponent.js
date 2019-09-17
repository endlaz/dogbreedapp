import React, {Component} from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

class GameTwoComponent extends Component {
    //this.randomImage=this.props.randomImage
    
    
    componentDidMount() {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const dogsList = Object.keys(response.body.message)
                this.props.dispatch({
                    type: 'SET_DOGSLIST',
                    payload: dogsList
                })
            
                const randomDog = get_random(dogsList)
                return request.get(`https://dog.ceo/api/breed/${randomDog}/images/random`)
            })
            .then(response => {
                console.log(response.body.message)
                // 1.) dispatch action SET_RANDOM_DOG_URL payload response.body.message
                // 2.) handle action in the reducer
            })
            .catch(console.error)
           
      }


    render() {
        return <div>
            <p>What is the corresponding image for {this.props.randomDog}</p>
            {/* <img src={url} alt="img" /> */}
        </div>
    }
}

const get_random = function (list) {
    return list[Math.floor((Math.random()*list.length))];
}

const mapStateToProps = (state) => {

    // console.log(randomDog)
    // 3.) get randomDogURL from the redux state -> put into component as props
    return {
      dogsList: state.dogsList,
      //randomDog: state.randomDog
    //   randomDog: state.randomDog
    }
  }
  
  export default connect(mapStateToProps)(GameTwoComponent)