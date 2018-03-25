import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
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

class SignUp extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                Accounts.createUser(
                    {
                        username: values.username,
                        email: values.email,
                        password: values.password
                    },
                    function(error) {
                        if (!error) {
                            console.log('Account Created: ', values);
                        } else {
                            console.log(error);
                        }
                    }
                );
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
                            <Col span={6} offset={9}>
                                <Card
                                    title={
                                        <h2 style={{ marginLeft: '36%' }}>
                                            Sign Up
                                        </h2>
                                    }
                                    style={{ width: '100%' }}
                                >
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Item>
                                            {getFieldDecorator('email', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your email!'
                                                    }
                                                ]
                                            })(
                                                <Input
                                                    prefix={
                                                        <Icon
                                                            type="mail"
                                                            style={{
                                                                color:
                                                                    'rgba(0,0,0,.25)'
                                                            }}
                                                        />
                                                    }
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                            )}
                                        </Form.Item>

                                        <Form.Item>
                                            {getFieldDecorator('username', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your username!'
                                                    }
                                                ]
                                            })(
                                                <Input
                                                    prefix={
                                                        <Icon
                                                            type="user"
                                                            style={{
                                                                color:
                                                                    'rgba(0,0,0,.25)'
                                                            }}
                                                        />
                                                    }
                                                    placeholder="Username"
                                                />
                                            )}
                                        </Form.Item>

                                        <Form.Item>
                                            {getFieldDecorator('password', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your Password!'
                                                    }
                                                ]
                                            })(
                                                <Input
                                                    prefix={
                                                        <Icon
                                                            type="lock"
                                                            style={{
                                                                color:
                                                                    'rgba(0,0,0,.25)'
                                                            }}
                                                        />
                                                    }
                                                    type="password"
                                                    placeholder="Password"
                                                />
                                            )}
                                        </Form.Item>

                                        <Form.Item>
                                            {getFieldDecorator(
                                                'passwordCheck',
                                                {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message:
                                                                'Please confirm your Password!'
                                                        },
                                                        {
                                                            validator: this
                                                                .compareToFirstPassword
                                                        }
                                                    ]
                                                }
                                            )(
                                                <Input
                                                    prefix={
                                                        <Icon
                                                            type="lock"
                                                            style={{
                                                                color:
                                                                    'rgba(0,0,0,.25)'
                                                            }}
                                                        />
                                                    }
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                />
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator(
                                                'acceptedTerms',
                                                {
                                                    valuePropName: 'checked',
                                                    initialValue: true
                                                }
                                            )(
                                                <Checkbox>
                                                    Agree to terms and
                                                    conditions
                                                </Checkbox>
                                            )}
                                            <Button
                                                style={{ width: '100%' }}
                                                type="primary"
                                                htmlType="submit"
                                            >
                                                Sign Up
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        );
    }
}

const WrappedSignUpForm = Form.create()(SignUp);

export default WrappedSignUpForm;
