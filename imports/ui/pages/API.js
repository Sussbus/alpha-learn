import React, { Component } from 'react'
import { Layout, Menu, Icon, Divider, Anchor } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { light } from 'react-syntax-highlighter/styles/prism'
import Markdown from 'react-markdown'

import CodeBlock from '../components/CodeBlock'

import * as introduction from '../../docs/introduction.js'
import * as coreConcepts from '../../docs/coreConcepts.js'
import * as actions from '../../docs/actions.js'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const API_Content = {
    1: (
        <Markdown
            source={introduction.default}
            renderers={{ code: CodeBlock }}
        />
    ),
    2: (
        <Markdown
            source={coreConcepts.default}
            renderers={{ code: CodeBlock }}
        />
    ),
    3: <Markdown source={actions.default} renderers={{ code: CodeBlock }} />
}

class API extends Component {
    state = {
        key: 1
    }

    onMenuChange = e => {
        this.setState({ key: e.key })
    }

    render() {
        const code = {
            margin: '0 1px',
            backgroundColor: '#f2f4f5',
            padding: '.2em .4em',
            borderRadius: '3px',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#eee'
        }
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
                        onClick={this.onMenuChange}
                    >
                        <SubMenu key="sub1" title={<span>Introduction</span>}>
                            <Menu.Item key="1">Getting Started</Menu.Item>
                            <Menu.Item key="2">Core Concepts</Menu.Item>
                            <Menu.Item key="3">Actions</Menu.Item>
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
                                {API_Content[this.state.key]}
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default API
