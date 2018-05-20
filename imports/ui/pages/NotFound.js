import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

class NotFound extends Component {
    render() {
        return (
            <Layout>
                <Col span={6} offset={6}>
                    <h1>This Page Was Not Found!</h1>
                </Col>
            </Layout>
        );
    }
}
export default NotFound;
