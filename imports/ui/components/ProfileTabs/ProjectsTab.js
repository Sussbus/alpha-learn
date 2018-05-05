import React, { Fragment } from 'react'
import {
    Modal,
    Layout,
    Row,
    Col,
    Icon,
    Divider,
    Avatar,
    Button,
    Spin
} from 'antd'
import { withState, withHandlers, mapProps, compose } from 'recompose'
import { withTracker } from 'meteor/react-meteor-data'

import CreateProject from '../CreateProject'
import ProjectOverview from '../ProjectOverview'
import ProfileProjectCard from '../ProfileProjectCard'
import EmptyStatus from '../EmptyStatus'

import { Projects } from '../../../api/projects/projects'

const { Content } = Layout

const ProjectsTab = ({
    isOpen,
    createProject,
    createNewProject,
    handleOk,
    handleCancel,
    projects,
    loading,
    projectOverviewVisible,
    cancelProjectOverview
}) => {
    return (
        <Content>
            <Row>
                <a onClick={createNewProject}>
                    <Col span={24}>
                        <span
                            style={{
                                float: 'left',
                                marginRight: 15,
                                marginTop: 4
                            }}
                        >
                            <Icon
                                type="folder-add"
                                style={{
                                    fontSize: 24,
                                    color: '#475660'
                                }}
                            />
                        </span>
                        <h2 style={{ color: '#475660' }}>Create New Project</h2>
                    </Col>
                </a>
                <CreateProject
                    onOk={handleOk}
                    onCancel={handleCancel}
                    visible={isOpen}
                />
                <ProjectOverview
                    visible={projectOverviewVisible}
                    onCancel={cancelProjectOverview}
                />
            </Row>
            {loading ? (
                <Col span={24} offset={12} style={{ marginTop: '5%' }}>
                    <Spin />
                </Col>
            ) : (
                projects.map(project => (
                    <Fragment key={project._id}>
                        <Divider type="horizontal" />
                        <ProfileProjectCard
                            projectTitle={project.project_title}
                            projectBody={project.project_body}
                        />
                    </Fragment>
                ))
            )}
            {projects.length == 0 && !loading && <EmptyStatus />}
        </Content>
    )
}

const enhance = compose(
    withState('isOpen', 'createProject', false),
    withState('projectOverviewVisible', 'toggleProjectOverview', true),
    withHandlers({
        createNewProject: props => event => {
            props.createProject(true)
        },
        handleOk: props => event => {
            props.createProject(false)
        },
        handleCancel: props => event => {
            props.createProject(false)
        },
        openProjectOverview: props => event => {
            props.toggleProjectOverview(true)
        },
        cancelProjectOverview: props => event => {
            props.toggleProjectOverview(false)
        }
    }),
    mapProps(ownProps => ({
        ...ownProps,
        projects: ownProps.projects,
        loading: ownProps.loading
    }))
)
const EnhancedProjectsTab = enhance(ProjectsTab)

export default withTracker(() => {
    const handle = Meteor.subscribe('Projects.pub.list')
    const loading = !handle.ready()

    return {
        projects: Projects.find({ user_id: Meteor.userId() }).fetch(),
        user: Meteor.user(),
        loading: loading
    }
})(EnhancedProjectsTab)
