import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getfetchStream } from '../../Redux_Store/Action';

class StreamEdit extends Component {

componentDidMount(){
    console.log(this.props.match.params.id);

    this.props.getfetchStream(this.props.match.params)
    //console.log(props);
    
}
    render() {
      return (
          <div>StreamEdit</div>
      )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    
    return {
      
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getfetchStream
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(StreamEdit);