import React, { Component } from 'react';
import {
    Card,
    Icon,
    Layout,
    Row,
    Col,
    Input,
    Tooltip,
    Progress,
    Button,
    Divider
} from 'antd';

const { Content } = Layout;

class Data extends Component {
    state = {
        loading: false,
        iconLoading: false
    };

    enterLoading = () => {
        this.setState({ loading: true, iconLoading: true });
        setTimeout(() => {
            this.setState({
                loading: false,
                iconLoading: false
            });
        }, 2000);
    };

    render() {
        return (
            <Layout>
                <Content>
                    <Col
                        span={20}
                        offset={2}
                        style={{ marginTop: 20, marginBottom: 20 }}
                    >
                        <Input.Search
                            style={{ width: 300 }}
                            placeholder="Search..."
                            enterButton
                        />
                    </Col>
                    <Row style={{ marginTop: '5%' }}>
                        <Col span={20} offset={2}>
                            <Card
                                title="SVHN Preprocessed Fragments"
                                extra={
                                    <Tooltip title="57% labeled">
                                        <div style={{ width: 170 }}>
                                            <Progress
                                                percent={57}
                                                size="small"
                                            />
                                        </div>
                                    </Tooltip>
                                }
                            >
                                <div style={{ width: '70%', float: 'left' }}>
                                    <img
                                        style={{
                                            width: 105,
                                            height: 'auto',
                                            float: 'left',
                                            borderRadius: 13,
                                            marginRight: 20
                                        }}
                                        src="https://kaggle2.blob.core.windows.net/datasets-images/3398/5506/dc5f350b189d3a41190660a37b8578a5/dataset-thumbnail.png"
                                    />

                                    <p
                                        style={{
                                            color: 'black',
                                            marginTop: 5,
                                            marginLeft: 10
                                        }}
                                    >
                                        <span style={{ fontSize: 16 }}>
                                            Help classify different kinds of
                                            numbers. This will help make for
                                            math solving and website data
                                            scraping.
                                        </span>
                                        <br />
                                        <span style={{ color: '#474747' }}>
                                            <i>Pattern Classification</i>
                                        </span>
                                        <br />
                                        <span>
                                            Created by <b>Sussbus</b> 3 months
                                            ago
                                        </span>
                                        <br />
                                    </p>
                                </div>
                                <div style={{ width: '30%', float: 'right' }}>
                                    <Divider
                                        type="vertical"
                                        style={{
                                            height: 110,
                                            marginRight: 10,
                                            float: 'left'
                                        }}
                                    />
                                    <div
                                        style={{
                                            float: 'right',
                                            width: '90%'
                                        }}
                                    >
                                        <Row
                                            style={{
                                                marginBottom: 10,
                                                marginTop: 5
                                            }}
                                        >
                                            <Col span={13}>
                                                <Icon
                                                    type="hdd"
                                                    style={{ fontSize: 16 }}
                                                />{' '}
                                                23 MB
                                            </Col>
                                            <Col span={11}>
                                                <Icon
                                                    type="file-text"
                                                    style={{ fontSize: 16 }}
                                                />{' '}
                                                193 labeled
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={13}>
                                                <Icon
                                                    type="eye-o"
                                                    style={{
                                                        fontSize: 18
                                                    }}
                                                />{' '}
                                                34 participants
                                            </Col>
                                            <Col span={11}>
                                                <Icon
                                                    type="fork"
                                                    style={{ fontSize: 16 }}
                                                />{' '}
                                                164 requests
                                            </Col>
                                        </Row>
                                        <Row style={{ marginTop: 10 }}>
                                            <Col span={10}>
                                                <Button
                                                    icon="play-circle-o"
                                                    loading={
                                                        this.state.iconLoading
                                                    }
                                                    onClick={this.enterLoading}
                                                >
                                                    Train
                                                </Button>
                                            </Col>
                                            <Col span={12}>
                                                <Button
                                                    icon="to-top"
                                                    loading={
                                                        this.state.iconLoading
                                                    }
                                                    onClick={this.enterLoading}
                                                >
                                                    Request Data
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}
export default Data;
