import React, { Component } from 'react'
import { Layout, Row, Col, Input, Select, Spin, Button, Tag } from 'antd'
import { withTracker } from 'meteor/react-meteor-data'
import { connect } from 'react-redux'
import CopyToClipboard from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { light } from 'react-syntax-highlighter/styles/prism'
import moment from 'moment'

import ProjectCard from '../components/ProjectCard'
import RequestData from '../components/RequestData'
import Loading from '../components/Loading'
import LabelingContainer from '../components/Labeling/LabelingContainer'

import { Projects } from '../../api/projects/projects'

const { Content } = Layout

class Data extends Component {
    state = {
        visible: false,
        isTraining: false
    }

    handleOk = () => {
        this.setState({ visible: false })
        const params = {
            title: 'SVHN Preprocessed Fragments',
            body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
            project_tags: ['research', 'patterns', 'classification']
        }
        Meteor.call('Projects.insert', params, error => {
            if (!error) {
                console.log('Project added!')
            } else {
                console.log(error)
            }
        })
    }

    handleCancel = () => {
        this.setState({ visible: false })
        console.log('canceled')
    }

    startTraining = () => {
        setTimeout(() => {
            this.setState({ isTraining: true })
        }, 1500)
    }

    requestData = () => {
        setTimeout(() => {
            this.setState({ visible: true })
        }, 1500)
    }

    render() {
        const { projects, loading, isTraining } = this.props
        const colors = [
            'blue',
            'geekblue',
            'cyan',
            'magenta',
            'red',
            'orange',
            'purple'
        ]

        return (
            <Layout>
                <Content>
                    <Col
                        span={20}
                        offset={2}
                        style={{ marginTop: 20, marginBottom: 20 }}
                    >
                        <Input.Search
                            style={{ width: 300 }}
                            placeholder="Search..."
                            enterButton
                        />
                        <Select
                            mode="tags"
                            placeholder="Tags"
                            style={{ width: 180, marginLeft: 15 }}
                            tokenSeparators={[',']}
                        >
                            <Select.Option key="1">Hardware</Select.Option>
                            <Select.Option key="2">Software</Select.Option>
                            <Select.Option key="3">General</Select.Option>
                            <Select.Option key="4">More</Select.Option>
                        </Select>
                    </Col>
                    <Row style={{ marginTop: '5%' }}>
                        <Col span={20} offset={2}>
                            {loading ? (
                                <Loading height={235} />
                            ) : (
                                projects.map(project => (
                                    <ProjectCard
                                        key={project._id}
                                        projectTitle={project.project_title}
                                        projectDescription={
                                            project.project_body
                                        }
                                        projectCreator="Sussbus"
                                        timeStamp={moment(
                                            project.createdAt
                                        ).fromNow()}
                                        projectTags={_.map(
                                            project.project_tags,
                                            function(value, key) {
                                                return (
                                                    <Tag
                                                        key={key}
                                                        color={colors[key]}
                                                    >
                                                        {value}
                                                    </Tag>
                                                )
                                            }
                                        )}
                                        numberLabeled={project.labeled}
                                        handleTrainingRequest={
                                            this.startTraining
                                        }
                                        handleDataRequest={this.RequestData}
                                    />
                                ))
                            )}

                            <RequestData
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            />
                            <LabelingContainer
                                visible={isTraining}
                                labelType="image-classification"
                            />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isTraining: state.training.isTraining
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const ConnectData = connect(mapStateToProps, mapDispatchToProps)(Data)

export default (DataContainer = withTracker(() => {
    const handle = Meteor.subscribe('Projects.pub.list')
    const loading = !handle.ready()
    !handle.ready()

    return {
        projects: Projects.find({}, { sort: { createdAt: -1 } }).fetch(),
        user: Meteor.user(),
        loading: loading
    }
})(ConnectData))
