import React, { Component } from 'react'
import {
    Layout,
    Row,
    Col,
    Input,
    Select,
    Spin,
    Button,
    Tag,
    AutoComplete
} from 'antd'
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

import { Projects, ProjectsIndex } from '../../api/projects/projects'

const { Content } = Layout

const searchQuery = new ReactiveVar('') //This var is for once the users searches
const searchingQuery = new ReactiveVar('') //This var is for search suggestions

class Data extends Component {
    state = {
        visible: false,
        isTraining: false,
        loadMore: 5
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

    loadMore = () => {
        this.setState({ loadMore: this.state.loadMore + 5 })
    }

    render() {
        const renderSearchSuggestions = this.props.suggestedProjects.map(
            project => (
                <AutoComplete.Option key={project._id}>
                    {project.project_title}
                </AutoComplete.Option>
            )
        )

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
                        <AutoComplete
                            dataSource={
                                searchingQuery.get().length > 0
                                    ? renderSearchSuggestions
                                    : null
                            }
                            onChange={e => searchingQuery.set(e)}
                        >
                            <Input.Search
                                placeholder="Search..."
                                onSearch={e => searchQuery.set(e)}
                                style={{ width: 300 }}
                                enterButton
                            />
                        </AutoComplete>
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
                                projects
                                    .slice(0, this.state.loadMore)
                                    .map(project => (
                                        <ProjectCard
                                            key={project._id}
                                            projectID={project._id}
                                            projectTitle={project.project_title}
                                            projectDescription={
                                                project.project_body
                                            }
                                            projectCreator={
                                                Meteor.users.findOne({
                                                    _id: project.user_id
                                                }).username
                                            }
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
                            {!loading &&
                                projects.length > this.state.loadMore && (
                                    <Col
                                        span={2}
                                        offset={11}
                                        style={{ marginBottom: 10 }}
                                    >
                                        <Button onClick={this.loadMore}>
                                            Load More
                                        </Button>
                                    </Col>
                                )}

                            <RequestData />
                            <LabelingContainer />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isTraining: state.training.isTraining,
        isRequestingData: state.dataRequest.isRequestingData
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
        /*projects: Projects.find(
            { isArchived: false },
            { sort: { createdAt: -1 } }
        ).fetch(),*/
        projects: ProjectsIndex.search(searchQuery.get()).fetch(),
        suggestedProjects: ProjectsIndex.search(searchingQuery.get(), {
            limit: 5
        }).fetch(),
        user: Meteor.user(),
        loading: loading
    }
})(ConnectData))
