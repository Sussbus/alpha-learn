import React from 'react'
import { Row, Col, Tabs, Button, Popconfirm } from 'antd'
import { withHandlers, compose } from 'recompose'
import { connect } from 'react-redux'

import store from '../../../store/store'
import { closeProjectOverview } from '../../../actions/projectOverview'

const SettingsTab = ({ deleteProject, project }) => {
    return (
        <Row style={{ height: 300 }}>
            <Tabs tabPosition="left">
                <Tabs.TabPane tab="Data Source" key="data-source">
                    Data Source
                </Tabs.TabPane>
                <Tabs.TabPane tab="Labeling Interface" key="labeling-interface">
                    Labeling Interface
                </Tabs.TabPane>
                <Tabs.TabPane tab="Options" key="options">
                    Options
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
            store.dispatch(closeProjectOverview())
            //console.log('Project ID: ' + props.projectID)
            Meteor.call('Projects.remove', props.projectID, error => {
                if (!error) {
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
        projectID: state.projectOverview.projectID
    }
}
const EnhancedSettingsTab = enhance(SettingsTab)

export default connect(mapStateToProps)(EnhancedSettingsTab)
