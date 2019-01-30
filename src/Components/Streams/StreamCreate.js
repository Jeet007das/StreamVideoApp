import React, { Component } from 'react';
import '../../StyleSheet/style.css';
import { connect } from 'react-redux';
import { createStream } from '../../Redux_Store/Action';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';
import StreamForm from './StreamForm';

class  StreamCreate  extends Component {
 
   onSubmit = (formValues) =>{
       if(!this.props.userId){
            swal("Please login first");
       }else{
            formValues.userId = this.props.userId;
            this.props.createStream(formValues)
       }
   
    }

    render() {
      return (
        <div className="">
             <h3 className="heading"><b>Stream Create</b></h3>
             <StreamForm onSubmit = {this.onSubmit} />
        </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createStream
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamCreate);

