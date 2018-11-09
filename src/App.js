import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Navigation from "./components/layouts/Navigation";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register";
import {LOGIN} from "./actions/types";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Navigation/>
                        <div className='container'>
                            <Switch>
                                <Route path="/" component={Home} exact />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                                <Route component={Error} />
                            </Switch>
                        </div>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        );
  }
}

export default App;
