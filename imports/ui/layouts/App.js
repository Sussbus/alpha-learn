import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Layout } from 'antd'
const { Header, Content, Footer } = Layout

import { Router, Route, Redirect, Switch, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'

import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import SignUp from '../pages/SignUp.js'
import API from '../pages/API.js'
import Settings from '../pages/Settings.js'
import Profile from '../pages/Profile.js'
import Data from '../pages/Data.js'
import NotFound from '../pages/NotFound.js'

import NavBar from '../components/NavBar.js'
import store from '../../store/store'

const browserHistory = createBrowserHistory()

const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
    render() {
        const isAuthenticated = Object.keys(this.props.auth.user).length > 0

        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login'
                            }}
                        />
                    )
                }
            />
        )

        return (
            <Layout
                style={{
                    display: 'flex',
                    minHeight: '100vh',
                    flexDirection: 'column'
                }}
            >
                <Router history={browserHistory}>
                    <div style={{ flex: 1 }}>
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
                                <PrivateRoute
                                    exact
                                    path="/settings"
                                    component={Settings}
                                />
                                <PrivateRoute
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
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(App)
