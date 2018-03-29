import React, { Component } from 'react';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

import { Router, Route, Switch, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from '../pages/Home.js';
import Login from '../pages/Login.js';
import SignUp from '../pages/SignUp.js';
import API from '../pages/API.js';
import Settings from '../pages/Settings.js';
import Profile from '../pages/Profile.js';
import Data from '../pages/Data.js';
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
                        <Content>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/login" component={Login} />
                                <Route
                                    exact
                                    path="/signup"
                                    component={SignUp}
                                />
                                <Route exact path="/data" component={Data} />
                                <Route exact path="/api" component={API} />
                                <Route
                                    exact
                                    path="/settings"
                                    component={Settings}
                                />
                                <Route
                                    exact
                                    path="/profile"
                                    component={Profile}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </Content>
                    </div>
                </Router>
                <Footer style={{ textAlign: 'center' }}>
                    &copy; 2018 BitByBite Inc. | About | Terms of Service |{' '}
                    Privacy Policy
                </Footer>
            </Layout>
        );
    }
}

export default App;
