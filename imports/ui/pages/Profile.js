import React, { Component } from 'react';
import { Layout, Col, Row, Card, Avatar, Icon, Divider } from 'antd';
import { connect } from 'react-redux';

const { Content } = Layout;

const tabListNoTitle = [
    {
        key: 'projects',
        tab: 'Projects'
    },
    {
        key: 'app',
        tab: 'app'
    },
    {
        key: 'project',
        tab: 'project'
    }
];

createNewProject = () => {
    //Need to add modal that pops up to create project
    console.log('project being created...');
};
openProject = () => {
    //Need to add modal that pops up with project info
    console.log('project being opened...');
};

const contentListNoTitle = {
    projects: (
        <Content>
            <Row>
                <a onClick={this.createNewProject}>
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
                                style={{ fontSize: 24, color: '#475660' }}
                            />
                        </span>
                        <h2 style={{ color: '#475660' }}>Create New Project</h2>
                    </Col>
                </a>
            </Row>
            <Divider type="horizontal" />
            <Row>
                <a onClick={this.openProject}>
                    <Col span={1}>
                        <Avatar
                            size="large"
                            src="https://kaggle2.blob.core.windows.net/datasets-images/3398/5506/dc5f350b189d3a41190660a37b8578a5/dataset-thumbnail.png"
                        />
                    </Col>
                    <Col span={23}>
                        <h4>SVHN Preprocessed Fragments</h4>
                        <p style={{ color: 'gray' }}>
                            Help classify different kinds of numbers. This will
                            help make for math solving and website data
                            scraping.
                        </p>
                    </Col>
                </a>
            </Row>
            <Divider type="horizontal" />
            <Row>
                <a onClick={this.openProject}>
                    <Col span={1}>
                        <Avatar
                            size="large"
                            src="https://kaggle2.blob.core.windows.net/datasets-images/3398/5506/dc5f350b189d3a41190660a37b8578a5/dataset-thumbnail.png"
                        />
                    </Col>
                    <Col span={23}>
                        <h4>SVHN Preprocessed Fragments</h4>
                        <p style={{ color: 'gray' }}>
                            Help classify different kinds of numbers. This will
                            help make for math solving and website data
                            scraping.
                        </p>
                    </Col>
                </a>
            </Row>
        </Content>
    ),
    app: <p>app content</p>,
    project: <p>project content</p>
};

class Profile extends Component {
    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    state = {
        key: 'projects'
    };

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
                            this.onTabChange(key, 'key');
                        }}
                    >
                        {contentListNoTitle[this.state.key]}
                    </Card>
                </Col>
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
