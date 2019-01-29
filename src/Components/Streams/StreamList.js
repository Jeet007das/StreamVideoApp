import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStreamLists } from '../../Redux_Store/Action';
import '../../StyleSheet/style.css'


class StreamList extends Component {

    componentDidMount(){
        this.props.getStreamLists()
        
    }

   renderStreamList = () =>{
      return this.props.streamLists.map((item,key) =>{
           return(
           
               <div className="card m-3 card-style" key={key}>
                   <div class="card-body p-0">
                       <div className="row m-0">
                           <div className="col-2 p-0">
                                <i class="fa fa-play-circle icon-style" aria-hidden="true"></i>
                           </div>
                           <div className="col-6 m-1 p-0">
                               <h3 style = {{color:"sienna"}}><b>{item.title}</b></h3>
                               <p style = {{color:"cadetblue"}}>{item.description}</p>
                           </div>
                       </div>

                   </div>
               </div>
           )
       });
   }
    render() {
      return (
          <div className="container-fluid">
             <h2>Stream List</h2>
             <div className = "row ">
             
             <div className = "col-lg-2"></div>
                <div className = "col-lg-8">
                     {this.renderStreamList()}
                </div>
                <div className = "col-lg-2"></div>
             </div>
              
          </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        streamLists: state.stream.streamLists
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getStreamLists
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);