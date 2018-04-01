import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Layout,
    Col,
    Row,
    Input,
    Button,
    Card,
    Form,
    Modal,
    message
} from 'antd';

const { Content } = Layout;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 2 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
};

class Settings extends Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false
    };

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleDeleteAccount = () => {
        this.setState({
            confirmLoading: true
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false
        });
    };

    handleUpdate = () => {
        message.success('Profile successfully updated!');
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var keys = Object.keys(values);
                let updateObj = {};

                keys.map((key) => {
                    if (values[key] !== undefined){
                        updateObj[key] = values[key]
                    }
                });
                if(Object.keys(updateObj).length > 0){
                    Meteor.call('UserData.insert', updateObj, (error, result) => {
                        if (error) {
                          console.log(error)
                        }
                        else {
                          message.success('Profile successfully updated!');
                        }
                      });
                }
            }
        });
    };

    render() {
        const { user } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Content style={{ width: '100%', marginTop: 15 }}>
                <Col span={20} offset={2}>
                    <h1>Settings</h1>
                    <Card
                        title="Details"
                        style={{ width: '100%', marginTop: 10 }}
                    >
                        <Form onSubmit={this.handleSubmit} id="settingsForm">
                            <Form.Item {...formItemLayout} label="Username:">
                                <span style={{ fontSize: 18, marginBottom: 2 }}>
                                    {user.username}
                                </span>
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="Email:">
                                <Input
                                    style={{ width: 400 }}
                                    placeholder="example@email.com"
                                />
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="Bio:">
                                {getFieldDecorator('bio', {
                                    rules: [{ required: false }]
                                })(
                                    <Input.TextArea
                                        style={{ width: 400, marginTop: 10 }}
                                        autosize={{ minRows: 2, maxRows: 4 }}
                                        placeholder="About you..."
                                    />
                                )}
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="Website:">
                                {getFieldDecorator('website', {
                                        rules: [{ required: false }]
                                })(
                                    <Input
                                        style={{ width: 275 }}
                                        addonBefore="http://"
                                        placeholder="mysite.com"
                                    />
                                )}
                            </Form.Item>
                        </Form>
                    </Card>
                    <Button
                        type="primary"
                        htmlType="submit"
                        form="settingsForm"
                        style={{ marginTop: 10, marginBottom: 20 }}
                    >
                        Update
                    </Button>
                    <Card title="Delete Account">
                        <div style={{ float: 'left', marginTop: 4 }}>
                            <p>
                                Taking a break from Alpha Learn? You've found
                                the right place.
                            </p>
                        </div>
                        <div style={{ float: 'right' }}>
                            <Button type="danger" onClick={this.showModal}>
                                Delete
                            </Button>
                        </div>
                    </Card>
                    <Modal
                        title="Delete Account"
                        visible={this.state.visible}
                        okText="Delete"
                        okType="danger"
                        onOk={this.handleDeleteAccount}
                        confirmLoading={this.state.confirmLoading}
                        onCancel={this.handleCancel}
                    >
                        <p>
                            Are you sure you would like to permantently delete
                            your account?
                        </p>
                    </Modal>
                </Col>
            </Content>
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

const WrappedSettingsForm = Form.create()(Settings);

export default connect(mapStateToProps, mapDispatchToProps)(
    WrappedSettingsForm
);
