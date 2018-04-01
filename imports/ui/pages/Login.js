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
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

const { Header, Footer, Sider, Content } = Layout;

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                Meteor.loginWithPassword(
                    values.email,
                    values.password,
                    function(error) {
                        if (error) {
                            console.log(error)
                        } else {
                        }
                    }
                );
                this.props.history.push("/profile")
            }
        });
    };

    componentWillReceiveProps(newProps){
        if(this.props.auth.user !== newProps.auth.user){
            if(newProps.auth.user !== {}){
                this.props.history.push("/profile")
            }
        }
    }

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
                                            Login
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
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: true
                                            })(
                                                <Checkbox>Remember me</Checkbox>
                                            )}
                                            <a
                                                style={{ float: 'right' }}
                                                href="#"
                                            >
                                                Forgot password
                                            </a>
                                            <Button
                                                style={{ width: '100%' }}
                                                type="primary"
                                                htmlType="submit"
                                            >
                                                Login
                                            </Button>
                                            Or{' '}
                                            <Link to="/signup">
                                                register now!
                                            </Link>
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

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};


const doubleWrap = connect(mapStateToProps)(withRouter(Login))
const WrappedLoginForm = Form.create()(doubleWrap);

export default WrappedLoginForm;
