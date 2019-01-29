import React, { Component } from 'react';
import './../../StyleSheet/style.css';
import { Link } from 'react-router-dom';
import GoogleAuth from '../OAuth/GoogleAuth';
import { connect } from 'react-redux';


class Header extends Component {
    refreshStreamList = () =>{
        console.log("When You Click refresh Button");
    }  

    render() {
        return (
            <div className="body">
                <div className="row m-0 p-0">
                    <div className="col-lg-2">
                        <Link to="/" className="item">
                           <i className="fa fa-home icon" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="col-lg-4 ">
                        <h3 className="homeHeader icon">Home</h3>
                    </div>
                    {
                        (this.props.isSignedIn)?
                        <div className="col-lg-3">
                        <Link to="/streams/new"  style = {{margin:"3px" , borderRadius: "20px"}}  className="btn btn-outline-success">
                                 <b>Create Stream</b>
                                 <span><i style = {{ margin:"5px", fontSize:"15px", color:"red"}} className="fa fa-plus" aria-hidden="true"></i></span>
                        </Link>
                           
                       </div>:<div className="col-lg-3"></div>
                    }
                  
                    <div className="col-lg-3">
                       <GoogleAuth />
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
   return{
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,null)(Header);