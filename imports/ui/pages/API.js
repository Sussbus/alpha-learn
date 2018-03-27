import React, { Component } from 'react';
import { Layout, Menu, Icon, Divider, Anchor } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { light } from 'react-syntax-highlighter/styles/prism';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class API extends Component {
    render() {
        const code = {
            margin: '0 1px',
            backgroundColor: '#f2f4f5',
            padding: '.2em .4em',
            borderRadius: '3px',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#eee'
        };
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100%',
                        left: 0
                    }}
                >
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                    >
                        <SubMenu key="sub1" title={<span>Introduction</span>}>
                            <Menu.Item key="1">Getting Started</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span>Basics</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span>Advanced</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span>FAQ</span>}>
                            <Menu.Item key="13">option9</Menu.Item>
                            <Menu.Item key="14">option10</Menu.Item>
                            <Menu.Item key="15">option11</Menu.Item>
                            <Menu.Item key="16">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Content
                        style={{ margin: '16px 16px 0', overflow: 'initial' }}
                    >
                        <div
                            style={{
                                padding: '60px 50px 0px 80px',
                                background: '#fff',
                                height: '100%'
                            }}
                        >
                            <div
                                style={{
                                    float: 'right',
                                    marginRight: 50
                                }}
                            >
                                <Anchor>
                                    <Anchor.Link href="#long" title="Title" />
                                    <Anchor.Link href="#docs" title="Title" />
                                    <Anchor.Link href="#" title="Title" />
                                </Anchor>
                            </div>
                            <div style={{ float: 'left', width: '80%' }}>
                                <h1 style={{ fontSize: 35, fontWeight: 400 }}>
                                    Getting Started
                                </h1>
                                <Divider />
                                <p>First, let's define some actions.</p>
                                <p>
                                    <b>Actions</b> are payloads of information
                                    that send data from your application to your
                                    store. They are the only source of
                                    information for the store. You send them to
                                    the store using{' '}
                                    <code style={code}>store.dispatch()</code>.
                                </p>
                                <p>
                                    Actions are plain JavaScript objects.
                                    Actions must have a{' '}
                                    <code style={code}>type</code> property that
                                    indicates the type of action being
                                    performed. Types should typically be defined
                                    as string constants. Once your app is large
                                    enough, you may want to move them into a
                                    separate module.
                                </p>
                                <p>
                                    Other than <code style={code}>type</code>,
                                    the structure of an action object is really
                                    up to you. If you're interested, check out
                                    Flux Standard Action for recommendations on
                                    how actions could be constructed.
                                </p>
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={light}
                                    showLineNumbers={true}
                                    lineNumberStyle={{
                                        color: '#C1C7CD',
                                        marginLeft: 5,
                                        fontSize: 12
                                    }}
                                    customStyle={{
                                        backgroundColor: '#f2f4f5',
                                        borderRadius: 5
                                    }}
                                >
                                    {
                                        'function addTodo(text) { \n    return { \n        type: ADD_TODO, \n        text \n    } \n}'
                                    }
                                </SyntaxHighlighter>
                                <p>
                                    <span id="long">Actions</span> are plain
                                    JavaScript objects. Actions must have a{' '}
                                    <code style={code}>type</code> property that
                                    indicates the type of action being
                                    performed. Types should typically be defined
                                    as string constants. Once your app is large
                                    enough, you may want to move them into a
                                    separate module.
                                </p>
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />
                                <span id="docs">Docs</span>
                                <br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />
                                content<br />
                                <code style={code}>isLoggedIn()</code>
                                <br />...<br />
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default API;
