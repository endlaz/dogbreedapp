import React from 'react'

import './GameOne.css'
import {connect} from 'react-redux'
import ScoreManupulation from './ScoreManupulation'
import {AddPara} from '../actions/actioncreator'
import {scoreManupulation} from '../actions/actioncreator'

class GameOne extends React.Component{
        
         constructor(){
             super()
             this.countOfCorrectAnswers = 0;
             this.countOfQuestions = 0;
             this.counterForDifficulty = 0;
             this.countOfWrongAnswers = 0;
             this.successPercentage = 0;
             this.counter = 3;
             this.level = 1;
             this.message = '';
         }

         handleevent = (e) =>{ 
            this.props.selectedbreedList.map(data => {
                if(data !== this.props.breedName[0]){
                    this.message = `The dog is not ${data}`
                }
            })
            console.log(this.message)
            this.props.AddPara(this.message);
            
        }

        calcualteSuccesPercentage = (noOfQuestions,noOfCorrectAnswers) => {
             return ((noOfCorrectAnswers / noOfQuestions) * 100 ).toFixed(1);
        }

        selectchange = (e) => {

            this.countOfQuestions +=1;
            console.log(this.props.breedName)
            const val =  e.target.value;
            if(val === this.props.breedName[0]){
                this.countOfCorrectAnswers += 1;
                this.counterForDifficulty += 1;
                console.log(this.counterForDifficulty);
                alert('You selected the correct Answer');
                
                if(this.counterForDifficulty % 5 === 0){
                    this.level +=1;
                    this.counter +=3;
                    this.props.handlesubmit(this.counter,'difficult');
                }
              
                this.props.handlesubmit(3);

            }
            else{
                
                this.countOfWrongAnswers += 1;
                this.counterForDifficulty = 0;

                alert(`Oops !!!! Wrong Answer. The correct Answer is ${this.props.breedName[0]}`)
                this.props.handlesubmit(3)
            }

              this.successPercentage = this.calcualteSuccesPercentage(this.countOfQuestions,this.countOfCorrectAnswers);
              this.props.scoreManupulation(this.countOfCorrectAnswers,this.countOfQuestions,this.countOfWrongAnswers,this.successPercentage,this.level,null)
            // if wrong give feedback
        }
        render(){
                console.log(this.props.breedName)
               // console.log(this.message)
                return (

                    <React.Fragment>
                        <section className="game-container"> 
                            <div className="score"> Score 
                                <ScoreManupulation />   
                            </div>
                            <div id="game"> 
                                {<img src={this.props.breedImage} alt="dog"></img>}
                            <div>
                                {this.props.selectedbreedList.map((data,i) => {
                                    console.log(data)
                                    return (
                                        <div>
                                          <button onClick={this.selectchange} value={data} key={i}>{data}</button>
                                        </div>
                                        
                                    ) 
                                })}
                            </div>
                            <button onClick={this.handleevent} > Hint </button>
                            <p>{this.props.scoreManupulation.hint} </p>
                            </div>
                        </section>
                    </React.Fragment>
                   
                )
        }
       
}


const mapStateToProps = (state) => {
    return{
        scoreManupulation : state.scoreManupulation
    }
}
export default connect(mapStateToProps,{AddPara,scoreManupulation})(GameOne)

