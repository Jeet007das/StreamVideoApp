import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from '../Components/Streams/StreamCreate';
import StreamShow from '../Components/Streams/StreamShow';
import StreamEdit from '../Components/Streams/StreamEdit';
import StreamList from '../Components/Streams/StreamList';
import Header from '../Components/Header/HeaderComponent';
import history from '../routingHistory';


class Routing extends Component {
    render() {
        return (
            <div>
                <Router history= {history }>
                    <div style={{height:"100vh", overflow:"visible"}}>
                        <Header />
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/show/:id" exact component={StreamShow} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                    </div>
                </Router>

            </div>
        )
    }
}

export default Routing;