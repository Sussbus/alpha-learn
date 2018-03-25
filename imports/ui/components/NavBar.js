import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';
const { Header, Content, Footer } = Layout;

class NavBar extends Component {
    render() {
        return (
            <Header
                style={{
                    position: 'fixed',
                    width: '100%'
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
                            marginRight: '62%',
                            fontSize: 16
                        }}
                    >
                        <Link to="/">Alpha Learn</Link>
                    </Menu.Item>
                    <Menu.Item key="1" style={{ fontSize: 16 }}>
                        API
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
export default NavBar;
