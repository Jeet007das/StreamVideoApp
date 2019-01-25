import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../Action'


class BlogPost extends Component {

    render() {
      return (
          <div>Here we fetch blog post from external api</div>
      )
    }
}

export default  connect(null, { fetchPost })(BlogPost);