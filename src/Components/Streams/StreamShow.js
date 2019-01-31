import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getfetchStream } from '../../Redux_Store/Action';

import flv from 'flv.js';


class StreamShow extends Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        this.props.getfetchStream(this.props.match.params)
        this.setUpPlayer();
    }
    componentWillUnmount(){
        this.videoPlayer.destroy()
        
    }

    componentDidUpdate(){
        this.setUpPlayer()
    }

    setUpPlayer() {
         if (this.videoPlayer || !this.props.streamData) {
            return;
        }
        const { id } = this.props.match.params;
        this.videoPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://192.168.1.111:8000/live/${id}.flv`
        });

        this.videoPlayer.attachMediaElement(this.videoRef.current);
        this.videoPlayer.load();

    }

    render() {
        return (
            <div>
                <video ref={this.videoRef} style={{ width: "50%" }} controls />
                {
                    (this.props.streamData) ?
                    <div>
                        <h1>{this.props.streamData.title}</h1>
                    </div>:<div></div>
                }
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        streamData: state.stream.streamData[0],
        //  userId: state.auth.userId,
        //  isSignedIn:state.auth.isSignedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getfetchStream
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);