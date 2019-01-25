import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../StyleSheet/style.css';

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
        console.log(meta);
        
         return (
            <div className = "field">
                         <label>{label}</label>
                         <input {...input} autoComplete="off"  style = {{width: "400px", height: "36px", display: "block", borderRadius: "20px",
                          }}  placeholder = {placeholder}/>
                          { this.renderError(meta) }
            </div>
        )
    }
    onSubmit(formValues){
        console.log(formValues);
        
    }

    render() {
      return (
           <div className="container-fluid form-body">
              <div   className="row">
                  <form onSubmit={this.props.handleSubmit(this.onSubmit)} style = {{ backgroundColor : "burlywood", borderRadius: "20px"}}> 
                      <Field name="title" placeholder="Enter Title" component={this.renderInput} label="Enter Title:" value = "fdsfsfs" />
                      <Field name="description" placeholder="Enter Description" component={this.renderInput} label="Enter Description:" />
                      <button style = {{margin:"5px"}} type="button" className="btn btn-primary"><b>Submit</b></button>
                  </form>
            </div>
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

export default reduxForm({
    form: 'streamForm',
    validate
  })(StreamCreate)

