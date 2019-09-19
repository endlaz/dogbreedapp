import React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux';
import GameOne from './GameOne'
import {AddDog} from '../actions/actioncreator'
import {getDogsList} from '../actions/dogsActions'
import _ from 'lodash'

class GameOneContainer extends React.Component{
    componentDidMount(){
        this.props.getDogsList();
      }

    getImage = (breedName,selectedbreedList) => {
        request
        .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then(response => {
            this.props.AddDog(selectedbreedList,breedName,response.body.message)
        })
        .catch(console.error);
    }

    getRandomDogs = (dogslist,n) => {
        return _.sampleSize(dogslist, n)
    }

    handlesubmit = (number,difficulty) => {
        const newarray = this.getRandomDogs(this.props.dogsList,number);
        if(difficulty === 'difficult'){
            const newOptions = this.getRandomDogs(newarray,3);
            const breedName = this.getRandomDogs(newOptions,1);
            this.getImage(breedName,newOptions);
        }
        else{
            const breedName = this.getRandomDogs(newarray,1);
            this.getImage(breedName,newarray);
        }
        
        
    }

    render(){
        if(this.props.gameOne === null ) return <button onClick={() => this.handlesubmit(3,'easy')}> StartGame </button>
        
        const { selectedbreedList, breedName, breedImage } = this.props.gameOne

        return (
            <div>
                <GameOne 
                    selectedbreedList = {selectedbreedList}
                    breedName={breedName}
                    breedImage={breedImage} 
                    handlesubmit={this.handlesubmit}
                />
            </div>
        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogsList : state.dogsList,
        gameOne : state.gameOne
    }
}

export default connect(mapStateToProps,{AddDog, getDogsList})(GameOneContainer)