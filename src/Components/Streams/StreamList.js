import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStreamLists } from '../../Redux_Store/Action';
import '../../StyleSheet/style.css';
import { Link } from 'react-router-dom';


class StreamList extends Component {

    componentDidMount(){
        this.props.getStreamLists()
        
    }

   renderStreamList = () =>{
      return this.props.streamLists.map((item,key) =>{
           return(
           
               <div className="card m-3 card-style" key={key}>
                   <div className="card-body p-0">
                       <div className="row m-0">
                           <div className="col-2 p-0">
                                <i className="fa fa-play-circle icon-style" aria-hidden="true"></i>
                           </div>
                           <div className="col-6 p-0">
                               <h3 style={{ color: "sienna" }}><b>{item.title}</b></h3>
                               <p style={{ color: "cadetblue" }}>{item.description}</p>
                           </div>
                           {
                               (this.props.currentUserId === item.userId) ?
                                   <div className="col-2 p-0">
                                    <Link to={`/streams/edit/${item.id}`}>
                                        <i style={{ fontSize: "50px", color: "green", margin: "10px" }} className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Link>
                                       
                                   </div>
                                   : null
                           }
                           {
                               (this.props.currentUserId === item.userId) ?
                                   <div className="col-2 p-0">
                                        <Link to={`/streams/delete/${item.id}`}>
                                           <i style={{ fontSize: "50px", color: "red", margin: "10px" }} className="fa fa-trash" aria-hidden="true"></i>
                                        </Link>
                                   </div>


                                   : null
                           }

                       </div>

                   </div>
               </div>
           )
       });
   }
    render() {
      return (
          <div className="background-class" >
             <h2>Stream List</h2>
             <div className = "row mx-0 ">
             
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
    console.log(state);
    
    return {
        streamLists: state.stream.streamLists,
        currentUserId:state.auth.userId
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getStreamLists
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);