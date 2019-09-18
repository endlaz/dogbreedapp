import React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux';
import GameOne from './GameOne'

class GameOneContainer extends React.Component{
   

    getImage = (breedName,selectedbreedList) => {
        request
        .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then(response => {
            this.props.dispatch({
                type: 'ADD_DOG',
                payload: {
                    selectedbreedList: selectedbreedList,
                    breedName: breedName,
                    breedImage: response.body.message
                }
            })
        })
        .catch(console.error);
    }

    getRandomDogs = (dogslist,n) =>{
        let result = new Array(n);
        let len = dogslist.length;
        let taken = new Array(len);
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = dogslist[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    handlesubmit = (number,diffuculty) => {
        const newarray = this.getRandomDogs(this.props.dogsList,number);
        if(diffuculty === 'difficult'){
            console.log(newarray);
           
            const newOptions = this.getRandomDogs(newarray,3);
            console.log(newOptions)
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
            <button onClick={this.handlesubmit}>
            StartGame
            </button>
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

export default connect(mapStateToProps)(GameOneContainer)