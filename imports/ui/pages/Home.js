import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Layout,
    Row,
    Col,
    Card,
    Form,
    Input,
    Button,
    Icon,
    Checkbox
} from 'antd';
import { connect } from 'react-redux';

const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const { username } = this.props;

        return (
            <div>
                <Layout>
                    <Content>
                        <Row style={{ marginTop: '5%' }}>
                            <Col span={7} offset={8}>
                                <h1>{username}</h1>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        );
    }
}

const WrappedHomeForm = Form.create()(Home);

const mapStateToProps = state => {
    return {
        username: state.auth.user.username
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedHomeForm);
