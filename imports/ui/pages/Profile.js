import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Col, Row } from 'antd';

const { Content } = Layout;

class Profile extends Component {
    render() {
        const { user } = this.props;
        return (
            <Layout style={{ width: '100%' }}>
                <Content>
                    <Col span={7} offset={8}>
                        <p>Username: {user.username}</p>
                    </Col>
                </Content>
            </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
