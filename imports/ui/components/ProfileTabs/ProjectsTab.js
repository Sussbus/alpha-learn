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
import ProfileProjectCard from '../ProfileProjectCard'
import EmptyStatus from '../EmptyStatus'

import { Projects } from '../../../api/projects/projects'

import store from '../../../store/store'
import { createProject } from '../../../actions/createProject'

const { Content } = Layout

const ProjectsTab = ({
    isOpen,
    createProject,
    createNewProject,
    handleOk,
    handleCancel,
    projects,
    loading
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
                <CreateProject />
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
                            projectID={project._id}
                            projectTitle={project.project_title}
                            projectBody={project.project_body}
                            numLabeled={project.labeled}
                            isArchived={project.isArchived}
                        />
                    </Fragment>
                ))
            )}
            {projects.length == 0 && !loading && <EmptyStatus />}
        </Content>
    )
}

const enhance = compose(
    withHandlers({
        createNewProject: props => event => {
            store.dispatch(createProject())
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
        projects: Projects.find(
            { user_id: Meteor.userId() },
            { sort: { createdAt: -1 } }
        ).fetch(),
        user: Meteor.user(),
        loading: loading
    }
})(EnhancedProjectsTab)
