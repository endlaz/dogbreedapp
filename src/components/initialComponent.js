import React from 'react'
import GameOneContainer from './GameOneContainer'
import {connect} from 'react-redux'
import {getDogs} from '../actions/fetchingdata'
 
class initialComponent extends React.Component{
    componentDidMount(){
      this.props.getDogs();
    }
   
    render (){
       return <GameOneContainer />
    }
}



export default connect(null,{getDogs})(initialComponent)