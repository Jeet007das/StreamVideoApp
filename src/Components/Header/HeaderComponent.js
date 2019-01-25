import React, { Component } from 'react';
import './../../StyleSheet/style.css';
import { Link } from 'react-router-dom';
import GoogleAuth from '../OAuth/GoogleAuth';


class Header extends Component {
    refreshStreamList = () =>{
        console.log("When You Click refresh Button");
    }  

    render() {
        return (
            <div className="container-fulid body">
                <div className="row m-0 p-0">
                    <div className="col-lg-2">
                        <Link to="/" className="item">
                           <i className="fa fa-home icon" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="col-lg-6 ">
                        <h3 className="homeHeader icon">Home</h3>
                    </div>
                    {/* <div className="col-lg-2">
                        <i onClick = { this.refreshStreamList } className="fa fa-refresh icon" aria-hidden="true"></i>
                    </div> */}
                    <div className="col-lg-4">
                        {/* <Link to="/login" className="item">
                            <i className="fas fa-sign-in-alt icon"></i>
                        </Link> */}
                        <GoogleAuth />
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;