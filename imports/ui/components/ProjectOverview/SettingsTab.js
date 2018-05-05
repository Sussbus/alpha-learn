import React from 'react'
import { Row, Col, Tabs, Button } from 'antd'

const SettingsTab = () => {
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
                    <Button type="danger">Delete Project</Button>
                </Tabs.TabPane>
            </Tabs>
        </Row>
    )
}

export default SettingsTab
