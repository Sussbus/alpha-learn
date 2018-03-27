import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class NavBar extends Component {
    state = {
        current: 'mail'
    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    };

    logoutUser = e => {
        Meteor.logout();
    };

    render() {
        const { user } = this.props;
        let isLoggedIn = Object.keys(user).length > 0;

        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <Link to="/">Alpha Learn</Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <Link to="/api">
                        <Icon type="code-o" />
                        API
                    </Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Icon type="database" />Data
                </Menu.Item>
                {!isLoggedIn ? (
                    <Menu.Item key="login">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                ) : null}
                {!isLoggedIn ? (
                    <Menu.Item key="signup">
                        <Link to="/signup">Sign Up</Link>
                    </Menu.Item>
                ) : null}
                {isLoggedIn ? (
                    <Menu.SubMenu title={<span>Account</span>}>
                        <Menu.Item key="setting:1">
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                        <Menu.Item key="setting:2">Settings</Menu.Item>
                        <Menu.Item key="setting:3">Help</Menu.Item>
                        <Menu.Item key="setting:4">
                            <span onClick={this.logoutUser}>Sign Out</span>
                        </Menu.Item>
                    </Menu.SubMenu>
                ) : null}
            </Menu>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
