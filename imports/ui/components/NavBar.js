import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'
import { withRouter } from 'react-router-dom'

import store from '../../store/store'
import { logout } from '../../actions/auth'

class NavBar extends Component {
    state = {
        current: ''
    }

    handleClick = e => {
        if (e.key == 'setting:logout') {
            store.dispatch(logout())
            if (
                this.props.location.pathname == '/login' ||
                this.props.location.pathname == '/settings'
            ) {
                this.setState({ current: 'login' })
            }
        } else {
            this.setState({
                current: e.key
            })
        }
    }

    componentWillMount() {
        if (this.props.location.pathname == '/') {
            this.setState({ current: 'home' })
        }
        if (this.props.location.pathname == '/api') {
            this.setState({ current: 'api' })
        }
        if (this.props.location.pathname == '/data') {
            this.setState({ current: 'data' })
        }
        if (this.props.location.pathname == '/profile') {
            this.setState({ current: 'setting:1' })
        }
    }

    render() {
        const { user } = this.props
        let isLoggedIn = Object.keys(user).length > 0
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <Link to="/">Alpha Learn</Link>
                </Menu.Item>
                <Menu.Item key="api">
                    <Link to="/api">
                        <Icon type="code-o" />
                        API
                    </Link>
                </Menu.Item>
                <Menu.Item key="data">
                    <Link to="/data">
                        <Icon type="database" />Data
                    </Link>
                </Menu.Item>
                {!isLoggedIn ? (
                    <Menu.Item key="login">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                ) : null}
                {isLoggedIn ? (
                    <Menu.SubMenu title={<span>Account</span>}>
                        <Menu.Item key="setting:1">
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                        <Menu.Item key="setting:2">
                            <Link to="/settings">Settings</Link>
                        </Menu.Item>
                        <Menu.Item key="setting:3">Help</Menu.Item>
                        <Menu.Item key="setting:logout">Sign Out</Menu.Item>
                    </Menu.SubMenu>
                ) : null}
            </Menu>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.user,
        location: ownProps.location
    }
}
const mapDispatchToProps = dispatch => {
    return {}
}
const RouterNavBar = withRouter(NavBar)
export default connect(mapStateToProps, mapDispatchToProps)(RouterNavBar)
