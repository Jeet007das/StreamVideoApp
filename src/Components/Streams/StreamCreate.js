import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../StyleSheet/style.css';
import { connect } from 'react-redux';
import { createStream } from '../../Redux_Store/Action';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';

class  StreamCreate  extends Component {
    renderError({error, touched}){
        if(touched && error){
            return (
                <div className= "error">
                    <h6><b style = {{color:"red"}}>{error}</b></h6>
                </div>
            )
        }
    }
     
    renderInput = ({ input, label, placeholder, meta }) =>{
         return (
            <div className = "field">
                         <label>{label}</label>
                         <input {...input} autoComplete="off"  style = {{width: "400px", height: "36px", display: "block", borderRadius: "20px",
                          }}  placeholder = {placeholder}/>
                          { this.renderError(meta) }
            </div>
        )
    }
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
              <div   className="row mx-0" style ={{marginTop:"25vh"}}>
                  <form className ="center-position" onSubmit ={this.props.handleSubmit(this.onSubmit)} style = {{ backgroundColor : "burlywood", borderRadius: "20px"}}> 
                      <Field name="title" placeholder="Enter Title" component={this.renderInput} label="Enter Title:" value = "fdsfsfs" />
                      <Field name="description" placeholder="Enter Description" component={this.renderInput} label="Enter Description:" />
                      <button style = {{margin:"5px"}} type="submit" className="btn btn-primary"><b>Submit</b></button>
                  </form>
            </div>
            {/* <h1>Stream list</h1> */}
        </div>
      )
    }
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.title){
        errors.title = "You must enter a title"
    }

    if(!formValues.description){
        errors.description = "You must enter a description"
    }
    return errors;
}


const fromWrapper =  reduxForm({
    form: 'streamForm',
    validate
  })(StreamCreate);


  const mapStateToProps = (state) => {
    //console.log(state);
    
    return {
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createStream
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(fromWrapper);

