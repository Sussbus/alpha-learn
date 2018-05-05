import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import { Modal, Row, Col, Tabs } from 'antd'

import OverviewTab from './OverviewTab'
import DataTab from './DataTab'
import SettingsTab from './SettingsTab'

import store from '../../../store/store'
import { closeProjectOverview } from '../../../actions/projectOverview'

const ProjectOverview = ({ currentTab, switchTab, visible, handleCancel }) => {
    return (
        <Modal
            title={
                <p style={{ fontSize: 16, fontWeight: '600' }}>
                    SVHN Preprocessed Fragments
                </p>
            }
            width="60%"
            style={{ marginTop: '1.85%' }}
            visible={visible}
            onCancel={handleCancel}
            footer={null}
        >
            <Tabs
                defaultActiveKey="overview"
                size="large"
                activeKey={currentTab}
                onChange={switchTab}
            >
                <Tabs.TabPane tab="Overview" key="overview">
                    <OverviewTab />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Activity" key="activity">
                    <Row style={{ height: 300 }}>
                        Content of Activity Tab Pane
                    </Row>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Performance" key="performance">
                    <Row style={{ height: 300 }}>
                        Content of Peroformance Tab Pane
                    </Row>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Data" key="data">
                    <DataTab />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Settings" key="settings">
                    <SettingsTab />
                </Tabs.TabPane>
            </Tabs>
        </Modal>
    )
}

enhance = compose(
    withState('currentTab', 'switchTab', 'overview'),
    withHandlers({
        switchTab: props => event => {
            props.switchTab(event)
        },
        handleCancel: props => event => {
            store.dispatch(closeProjectOverview())
        }
    })
)

export default enhance(ProjectOverview)
