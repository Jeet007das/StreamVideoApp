import React, { Component } from 'react';
import '../../StyleSheet/style.css'
import { connect } from 'react-redux';
import { signIn , signOut } from '../../Redux_Store/Action';
import { bindActionCreators } from 'redux';

class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:'633090330089-idbp3jq74nt4jsuso595innp0b2vs6so.apps.googleusercontent.com',
                scope:'email'
            }).then( () =>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    renderLoginBtnStatus = () => {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <div className="container">
                <button onClick = {() => this.auth.signOut()} type="button" className="btn btn-outline-light btn-sm logBtn">
                    <div className="left">
                        <h6 style = {{color:"red"}}><b>Logout with </b> &nbsp;
                             <img width="20px" alt="Google &quot;G&quot; Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                        </h6>
                    </div>

                </button>
            </div>
            )
        } else if (this.props.isSignedIn === false) {
            return (
                <div className="container">
                    <button onClick = {() => this.auth.signIn()} type="button" className="btn btn-outline-light btn-sm logBtn">
                        <div className="left">
                            <h6 style = {{color:"red"}}> <b>Login with </b> &nbsp;
                                 <img width="20px" alt="Google &quot;G&quot; Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                            </h6>
                        </div>

                    </button>
                </div>
            )

        }
    }

    render() {
  
        
      return (
          <div>{this.renderLoginBtnStatus()}</div>
      )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        isSignedIn : state.auth.isSignedIn     
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signIn , signOut
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);