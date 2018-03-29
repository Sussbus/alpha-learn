import React, { Component } from 'react';
import { Layout, Col, Card, Avatar } from 'antd';
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

const contentListNoTitle = {
    projects: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>
};

class Profile extends Component {
    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    state = {
        key: 'app'
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
