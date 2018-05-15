import React from 'react'
import { Row, Col, Tabs, Button, Popconfirm, Divider, Icon, Input } from 'antd'
import { withHandlers, compose } from 'recompose'
import { connect } from 'react-redux'

import store from '../../../store/store'
import { closeProjectOverview } from '../../../actions/projectOverview'

const SettingsTab = ({ project, deleteProject }) => {
    return (
        <Row style={{ height: 300 }}>
            <Tabs tabPosition="left">
                <Tabs.TabPane tab="Data Source" key="data-source">
                    Data Source
                </Tabs.TabPane>
                <Tabs.TabPane tab="Labeling Interface" key="labeling-interface">
                    <Row align="middle" style={{ marginBottom: 20 }}>
                        <Col span={20}>
                            <h3 style={{ marginBottom: 0 }}>
                                Image Classification
                            </h3>
                            <p style={{ marginTop: 0 }}>
                                An image classification template.
                            </p>
                        </Col>
                        <Col span={4} style={{ paddingTop: 4 }}>
                            <Button
                                style={{ width: 95 }}
                                type={
                                    project.labeling_interface ==
                                    'IMAGE_CLASSIFICATION'
                                        ? 'primary'
                                        : 'default'
                                }
                                id="IMAGE_CLASSIFICATION"
                            >
                                {project.labeling_interface ==
                                'IMAGE_CLASSIFICATION'
                                    ? 'Current'
                                    : 'Select'}
                                <Icon
                                    type={
                                        project.labeling_interface ==
                                        'IMAGE_CLASSIFICATION'
                                            ? 'check'
                                            : 'arrow-right'
                                    }
                                />
                            </Button>
                        </Col>
                    </Row>
                    <Divider type="horizontal" />
                    <Row align="middle" style={{ marginBottom: 20 }}>
                        <Col span={20}>
                            <h3 style={{ marginBottom: 0 }}>Text Sentiment</h3>
                            <p style={{ marginTop: 0 }}>
                                A basic text classification template.
                            </p>
                        </Col>
                        <Col span={4} style={{ paddingTop: 3 }}>
                            <Button
                                style={{ width: 95 }}
                                type={
                                    project.labeling_interface ==
                                    'TEXT_SENTIMENT'
                                        ? 'primary'
                                        : 'default'
                                }
                                id="TEXT_SENTIMENT"
                            >
                                {project.labeling_interface == 'TEXT_SENTIMENT'
                                    ? 'Current'
                                    : 'Select'}
                                <Icon
                                    type={
                                        project.labeling_interface ==
                                        'TEXT_SENTIMENT'
                                            ? 'check'
                                            : 'arrow-right'
                                    }
                                />
                            </Button>
                        </Col>
                    </Row>
                    <Divider type="horizontal" />
                    <Row align="middle">
                        <Col span={20}>
                            <h3 style={{ marginBottom: 0 }}>
                                Image Segmentation
                            </h3>
                            <p style={{ marginTop: 0 }}>
                                An image segmentation template.
                            </p>
                        </Col>
                        <Col span={4} style={{ paddingTop: 4 }}>
                            <Button
                                style={{ width: 95 }}
                                type={
                                    project.labeling_interface ==
                                    'IMAGE_SEGMENTATION'
                                        ? 'primary'
                                        : 'default'
                                }
                                id="IMAGE_SEGMENTATION"
                            >
                                {project.labeling_interface ==
                                'IMAGE_SEGMENTATION'
                                    ? 'Current'
                                    : 'Select'}
                                <Icon
                                    type={
                                        project.labeling_interface ==
                                        'IMAGE_SEGMENTATION'
                                            ? 'check'
                                            : 'arrow-right'
                                    }
                                />
                            </Button>
                        </Col>
                    </Row>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Options" key="options">
                    <Row justify="middle">
                        <Col span={12}>
                            <p
                                style={{
                                    fontSize: 16,
                                    fontWeight: '600'
                                }}
                            >
                                Edit Project Title
                            </p>
                            <Input defaultValue={project.project_title} />
                        </Col>
                    </Row>
                    <Row justify="middle">
                        <Col span={12}>
                            <p
                                style={{
                                    fontSize: 16,
                                    fontWeight: '600',
                                    marginTop: 20
                                }}
                            >
                                Edit Project Description
                            </p>
                            <Input.TextArea
                                rows={2}
                                defaultValue={project.project_body}
                            />
                        </Col>
                    </Row>
                    <Row justify="middle">
                        <Col span={24}>
                            <Button type="danger" style={{ marginTop: 15 }}>
                                Archive Project
                            </Button>
                            <p style={{ color: 'gray', marginTop: 5 }}>
                                Archiving this project will make it <b>only</b>{' '}
                                visibile on your profile
                            </p>
                        </Col>
                    </Row>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Other" key="other">
                    <p style={{ fontSize: 17, color: 'gray' }}>
                        Deleting a project is permanent and can not be restored
                    </p>
                    <Popconfirm
                        placement="bottomLeft"
                        title="Are you sure you would like to delete this project?"
                        onConfirm={deleteProject}
                    >
                        <Button type="danger">Delete Project</Button>
                    </Popconfirm>
                </Tabs.TabPane>
            </Tabs>
        </Row>
    )
}

const enhance = compose(
    withHandlers({
        deleteProject: props => event => {
            Meteor.call('Projects.remove', props.projectID, error => {
                if (!error) {
                    store.dispatch(closeProjectOverview())
                    console.log(
                        'Successfully delete a project with ID: ' +
                            props.projectID
                    )
                } else {
                    console.log(error)
                }
            })
        }
    })
)

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        project: state.projectOverview.project,
        projectID: state.projectOverview.project._id
    }
}
const EnhancedSettingsTab = enhance(SettingsTab)

export default connect(mapStateToProps)(EnhancedSettingsTab)
