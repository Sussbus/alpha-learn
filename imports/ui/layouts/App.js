import React, { Component } from 'react';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

import { Router, Route, Switch, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from '../pages/Home.js';
import Login from '../pages/Login.js';
import SignUp from '../pages/SignUp.js';
import NotFound from '../pages/NotFound.js';

import NavBar from '../components/NavBar.js';

const browserHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Layout>
                <Router history={browserHistory}>
                    <div>
                        <NavBar />
                        <Content style={{ marginTop: 64 }}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/login" component={Login} />
                                <Route
                                    exact
                                    path="/signup"
                                    component={SignUp}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </Content>
                    </div>
                </Router>
            </Layout>
        );
    }
}

export default App;
