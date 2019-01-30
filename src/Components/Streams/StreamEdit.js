import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getfetchStream, editStream } from '../../Redux_Store/Action';
import StreamForm from './StreamForm';
import swal from 'sweetalert';
import video1 from '../images/video.mp4';
import video2 from '../images/video.webm';

class StreamEdit extends Component {

componentDidMount(){
     this.props.getfetchStream(this.props.match.params)
    }

    onSubmit = (formValues) =>{
        if(this.props.isSignedIn){
             const id = this.props.streamData.id
             this.props.editStream(id, formValues)
        }else{
            swal("please login")
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
            
              <h3><b>Stream Update</b></h3>
              {
                  (this.props.streamData) ? <div>
                       <StreamForm 
                          initialValues = {_.pick(this.props.streamData, 'title', 'description')} 
                          onSubmit={this.onSubmit}  />
                    </div>:null
              }
             
          </div>
      )
    }
}


const mapStateToProps = (state) => {
   return {
        streamData:state.stream.streamData[0],
        userId: state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getfetchStream,
        editStream
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(StreamEdit);