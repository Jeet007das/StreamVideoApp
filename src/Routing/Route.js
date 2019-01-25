import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from '../Components/Streams/StreamCreate';
import StreamDelete from '../Components/Streams/StreamDelete';
import StreamShow from '../Components/Streams/StreamShow';
import StreamEdit from '../Components/Streams/StreamEdit';
import StreamList from '../Components/Streams/StreamList';
import Header from '../Components/Header/HeaderComponent';


class Routing extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/edit" exact component={StreamEdit} />
                        <Route path="/streams/delete" exact component={StreamDelete} />
                        <Route path="/streams/show" exact component={StreamShow} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}

export default Routing;