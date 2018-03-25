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

const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);
                console.log(values.userName, values.password);
            }
        });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Passwords do not match!');
        } else {
            callback();
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Layout>
                    <Content>
                        <Row style={{ marginTop: '5%' }}>
                            <Col span={7} offset={8}>
                                <h1>Home</h1>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        );
    }
}

const WrappedHomeForm = Form.create()(Home);

export default WrappedHomeForm;
