import React, { Component } from 'react'
import { Layout, Col, Row, Card, Avatar, Icon, Divider } from 'antd'
import { connect } from 'react-redux'

import ProjectsTab from '../components/ProfileTabs/ProjectsTab'
import DataTab from '../components/ProfileTabs/DataTab'

import CreateProject from '../components/CreateProject'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'

const { Content } = Layout

const tabListNoTitle = [
    {
        key: 'projects',
        tab: 'Projects'
    },
    {
        key: 'data',
        tab: 'Data'
    },
    {
        key: 'shells',
        tab: 'Shells'
    }
]

const contentListNoTitle = {
    projects: <ProjectsTab />,
    data: <DataTab />,
    shells: <p>Shells content</p>
}

class Profile extends Component {
    onTabChange = (key, type) => {
        console.log(key, type)
        this.setState({ [type]: key })
    }

    state = {
        key: 'projects',
        isOpen: false
    }

    render() {
        return (
            <Content style={{ width: '100%', marginTop: 15 }}>
                <Col span={20} offset={2}>
                    <h1>Profile</h1>
                    <Card
                        title={
                            <span>
                                <h1 style={{ marginBottom: 0 }}>
                                    {this.props.user.username}
                                </h1>
                                <span
                                    style={{
                                        color: 'gray',
                                        fontSize: 12,
                                        marginTop: 0
                                    }}
                                >
                                    #32131
                                </span>
                            </span>
                        }
                        style={{ width: '100%' }}
                        tabList={tabListNoTitle}
                        activeTabKey={this.state.key}
                        onTabChange={key => {
                            this.onTabChange(key, 'key')
                        }}
                    >
                        {contentListNoTitle[this.state.key]}
                    </Card>
                </Col>
                <ProjectOverview visible={this.props.isProjectOpen} />
            </Content>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isProjectOpen: state.projectOverview.isProjectOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
