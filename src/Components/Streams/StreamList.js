import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStreamLists } from '../../Redux_Store/Action';


class StreamList extends Component {

    componentDidMount(){
        // this.props.getStreamLists()
        
    }

    render() {
      return (
          <div><h2>
            Here we use stream List  
            </h2></div>
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
        getStreamLists
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);