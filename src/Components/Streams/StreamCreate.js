import React, { Component } from 'react';
import '../../StyleSheet/style.css';
import { connect } from 'react-redux';
import { createStream } from '../../Redux_Store/Action';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';
import StreamForm from './StreamForm';
import video1 from '../images/Sony-cam.mp4';
import video2 from '../images/Sony-cam.webm';

class StreamCreate  extends Component {
 
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
         <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={video1} type="video/mp4" />
                    <source src={video2} type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>
             <h3 style = {{color:"white"}}><b>Stream Create</b></h3>
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

