import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';
import { connect } from 'react-redux';

const { Header, Content, Footer } = Layout;

class NavBar extends Component {
    render() {
        const { user } = this.props;
        let isLoggedIn = Object.keys(user).length > 0;

        return (
            <Header
                style={{
                    position: 'fixed',
                    width: '100%',
                    zIndex: 2
                }}
            >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item
                        style={{
                            float: 'left',
                            marginRight: '60%',
                            fontSize: 16
                        }}
                    >
                        <Link to="/">Alpha Learn</Link>
                    </Menu.Item>
                    <Menu.Item key="1" style={{ fontSize: 16 }}>
                        <Link to="/api">API</Link>
                    </Menu.Item>
                    <Menu.Item key="2" style={{ fontSize: 16 }}>
                        Data
                    </Menu.Item>
                    <Menu.Item key="3" style={{ fontSize: 16 }}>
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                    <Menu.Item key="4" style={{ fontSize: 16 }}>
                        <Link to="/signup">Sign Up</Link>
                    </Menu.Item>
                </Menu>
            </Header>
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
