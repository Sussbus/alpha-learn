import React, { Component } from 'react';
import { Layout, Col } from 'antd';

const { Content } = Layout;

class Profile extends Component {
    render() {
        return (
            <Content style={{ width: '100%', marginTop: 15 }}>
                <Col span={20} offset={2}>
                    <h1>Profile</h1>
                </Col>
            </Content>
        );
    }
}
export default Profile;
