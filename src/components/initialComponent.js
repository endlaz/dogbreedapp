import React from 'react'
import GameOneContainer from './GameOneContainer'
import * as request from 'superagent'
import {connect} from 'react-redux'

class initialComponent extends React.Component{
    componentDidMount(){
        request
        .get('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            this.props.dispatch({
                type: 'SET_DOGSLIST',
                payload: Object.keys(response.body.message)
            })})
        .catch(console.error)
    }
   
    render (){
        
       return <GameOneContainer />
    }
}

const mapStateToProps = (state) => {
    return {
        dogsList : state
    }
    
}

export default connect(mapStateToProps)(initialComponent)