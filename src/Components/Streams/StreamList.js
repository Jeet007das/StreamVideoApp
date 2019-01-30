import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStreamLists, deleteStream } from '../../Redux_Store/Action';
import '../../StyleSheet/style.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


class StreamList extends Component {

    componentDidMount(){
        this.props.getStreamLists()
    }

    confirmDelete = async (id) =>{
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                this.props.deleteStream(id);
            } 
          })
    }

   renderStreamList = () =>{
      return this.props.streamLists.map((item,key) =>{
           return(
           
               <div className="card m-3 card-style" key={key}>
                   <div className="card-body p-0">
                       <div className="row m-0">
                           <div style= {{alignItems: "center",display: "grid"}} className="col-2 p-0">
                                <i className="fa fa-play-circle icon-style" aria-hidden="true"></i>
                           </div>
                           <div className="col-6 p-0">
                               <h3 style={{ color: "sienna" }}><b>{item.title}</b></h3>
                               <p style={{ color: "cadetblue" }}>{item.description}</p>
                           </div>
                           {
                               (this.props.currentUserId === item.userId) ?
                                   <div style= {{alignItems: "center",display: "grid"}}  className="col-2 p-0">
                                    <Link to={`/streams/edit/${item.id}`}>
                                        <i style={{ fontSize: "50px", color: "green", margin: "10px" }} className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Link>
                                       
                                   </div>
                                   : null
                           }
                           {
                               (this.props.currentUserId === item.userId) ?
                                   <div style= {{alignItems: "center",display: "grid"}}  className="col-2 p-0">
                                        {/* <Link to={`/streams/delete/${item.id}`}> */}
                                            <i onClick = {() => this.confirmDelete(item.id)} style={{ fontSize: "50px", color: "red", margin: "10px", cursor:"pointer"}} className="fa fa-trash" aria-hidden="true"></i>
                                        {/* </Link> */}
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
        console.log(this.props.streamLists);
        
      return (
          <div className="background-class" >
             <h2>Stream List</h2>
             <div className = "row mx-0 ">
             
             <div className = "col-lg-2"></div>
                <div className = "col-lg-8">
                     {
                         (this.props.streamLists != null)?this.renderStreamList():<div>Loading...</div>
                    }
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
        getStreamLists,
        deleteStream
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);