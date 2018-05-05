import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import { Modal, Row, Col, Select, Tabs, Button, Divider } from 'antd'
import {
    ResponsiveContainer,
    LineChart,
    BarChart,
    Line,
    Bar,
    Tooltip,
    ReferenceDot,
    CartesianGrid,
    Legend,
    XAxis,
    YAxis,
    Label
} from 'recharts'

const ProjectOverview = ({
    currentTab,
    switchTab,
    switchChartPeriod,
    chartPeriod,
    visible,
    onCancel,
    handleCancel
}) => {
    const data = [
        { day: 'Monday', labeled: 23 },
        { day: 'Tuesday', labeled: 16 },
        { day: 'Wednesday', labeled: 32 },
        { day: 'Thursday', labeled: 19 },
        { day: 'Friday', labeled: 27 },
        { day: 'Saturday', labeled: 33 },
        { day: 'Sunday', labeled: 18 }
    ]
    const contributors = [
        { username: 'sussbus', labeled: 19 },
        { username: 'clarkin1', labeled: 12 },
        { username: 'testuser1', labeled: 21 },
        { username: 'testuser2', labeled: 17 },
        { username: 'testuser3', labeled: 32 }
    ]

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
            onCancel={onCancel}
            footer={null}
        >
            <Tabs
                defaultActiveKey="overview"
                size="large"
                activeKey={currentTab}
                onChange={switchTab}
            >
                <Tabs.TabPane tab="Overview" key="overview">
                    <Row style={{ height: 340, left: -15 }}>
                        <Col span={16}>
                            <Row>
                                <Col span={20} offset={1}>
                                    <p style={{ fontSize: 17, color: 'gray' }}>
                                        Labels created
                                    </p>
                                </Col>
                                <Col span={2}>
                                    <Select
                                        defaultValue="daily"
                                        onChange={switchChartPeriod}
                                        value={chartPeriod}
                                        style={{ width: 93, top: -6 }}
                                    >
                                        <Select.Option value="daily">
                                            Daily
                                        </Select.Option>
                                        <Select.Option value="weekly">
                                            Weekly
                                        </Select.Option>
                                        <Select.Option value="monthly">
                                            Monthly
                                        </Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                            <Row>
                                <ResponsiveContainer width="100%" height={310}>
                                    <LineChart
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 5,
                                            left: -5,
                                            bottom: 5
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="day" />
                                        <YAxis dataKey="labeled" />
                                        <ReferenceDot />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="labeled"
                                            stroke="#3A88C4"
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Row>
                        </Col>
                        <Col
                            span={1}
                            style={{ paddingLeft: '2.55%', paddingTop: 15 }}
                        >
                            <Divider type="vertical" style={{ height: 305 }} />
                        </Col>
                        <Col span={7} style={{ paddingLeft: 20 }}>
                            <Row>
                                <p
                                    style={{
                                        fontSize: 17,
                                        color: 'gray',
                                        top: -15
                                    }}
                                >
                                    Top Contributors
                                </p>
                            </Row>
                            <Row>
                                <ResponsiveContainer width="100%" height={315}>
                                    <BarChart
                                        data={contributors}
                                        margin={{ top: 15, left: -33 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="username" />
                                        <YAxis dataKey="labeled" />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="labeled" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Row>
                        </Col>
                    </Row>
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
                    <Row style={{ height: 300 }}> Content of Data Tab Pane</Row>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Settings" key="settings">
                    <Row style={{ height: 300 }}>
                        <Tabs tabPosition="left">
                            <Tabs.TabPane tab="Data Source" key="data-source">
                                Data Source
                            </Tabs.TabPane>
                            <Tabs.TabPane
                                tab="Labeling Interface"
                                key="labeling-interface"
                            >
                                Data Source
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Options" key="options">
                                Data Source
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Other" key="other">
                                <p style={{ fontSize: 17, color: 'gray' }}>
                                    Deleting a project is permanent and can not
                                    be restored
                                </p>
                                <Button type="danger">Delete Project</Button>
                            </Tabs.TabPane>
                        </Tabs>
                    </Row>
                </Tabs.TabPane>
            </Tabs>
        </Modal>
    )
}

enhance = compose(
    withState('currentTab', 'switchTab', 'overview'),
    withState('isVisible', 'toggleVisibility', true),
    withState('chartPeriod', 'changeChartPeriod', 'daily'),
    withHandlers({
        switchTab: props => event => {
            props.switchTab(event)
        },
        handleCancel: props => event => {
            props.toggleVisibility(false)
        },
        switchChartPeriod: props => event => {
            props.changeChartPeriod(event)
        }
    })
)

export default enhance(ProjectOverview)
