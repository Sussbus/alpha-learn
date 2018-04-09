import React, { Component } from "react";
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
  Divider,
  Avatar,
  Tag,
  Select,
  Modal,
  Slider
} from "antd";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { light } from "react-syntax-highlighter/styles/prism";

const { Content } = Layout;

class Data extends Component {
  state = {
    loading: false,
    iconLoading: false,
    visible: false,
    isCopied: false
  };

  enterLoading = () => {
    this.setState({ loading: true, iconLoading: true });
    setTimeout(() => {
      this.setState({
        loading: false,
        iconLoading: false,
        visible: true
      });
    }, 2000);
  };

  handleClick = e => {
    console.log(e);
    this.setState({ visible: false });
  };
  handleOk = () => {
    this.setState({ visible: false });
  };

  handleCopy = () => {
    this.setState({ isCopied: true });
    setTimeout(() => {
      this.setState({
        isCopied: false
      });
    }, 1200);
  };

  render() {
    function formatter(value) {
      return `${value}%`;
    }
    return (
      <Layout>
        <Content>
          <Col span={20} offset={2} style={{ marginTop: 20, marginBottom: 20 }}>
            <Input.Search
              style={{ width: 300 }}
              placeholder="Search..."
              enterButton
            />
            <Select
              mode="tags"
              placeholder="Tags"
              style={{ width: 180, marginLeft: 15 }}
              tokenSeparators={[","]}
            >
              <Select.Option key="1">Hardware</Select.Option>
              <Select.Option key="2">Software</Select.Option>
              <Select.Option key="3">General</Select.Option>
              <Select.Option key="4">More</Select.Option>
            </Select>
          </Col>
          <Row style={{ marginTop: "5%" }}>
            <Col span={20} offset={2}>
              {/*<Card
                title="SVHN Preprocessed Fragments"
                extra={
                  <Tooltip title="57% labeled">
                    <div style={{ width: 170 }}>
                      <Progress percent={57} size="small" />
                    </div>
                  </Tooltip>
                }
              >
                <div style={{ width: "70%", float: "left" }}>
                  <img
                    style={{
                      width: 105,
                      height: "auto",
                      float: "left",
                      borderRadius: 13,
                      marginRight: 20
                    }}
                    src="https://kaggle2.blob.core.windows.net/datasets-images/3398/5506/dc5f350b189d3a41190660a37b8578a5/dataset-thumbnail.png"
                  />

                  <p
                    style={{
                      color: "black",
                      marginTop: 5,
                      marginLeft: 10
                    }}
                  >
                    <span style={{ fontSize: 16 }}>
                      Help classify different kinds of numbers. This will help
                      make for math solving and website data scraping.
                    </span>
                    <br />
                    <span style={{ color: "#474747" }}>
                      <i>Pattern Classification</i>
                    </span>
                    <br />
                    <span>
                      Created by <b>Sussbus</b> 3 months ago
                    </span>
                    <br />
                  </p>
                </div>
                <div style={{ width: "30%", float: "right" }}>
                  <Divider
                    type="vertical"
                    style={{
                      height: 110,
                      marginRight: 10,
                      float: "left"
                    }}
                  />
                  <div
                    style={{
                      float: "right",
                      width: "90%"
                    }}
                  >
                    <Row
                      style={{
                        marginBottom: 10,
                        marginTop: 5
                      }}
                    >
                      <Col span={13}>
                        <Icon type="hdd" style={{ fontSize: 16 }} /> 23 MB
                      </Col>
                      <Col span={11}>
                        <Icon type="file-text" style={{ fontSize: 16 }} /> 193
                        labeled
                      </Col>
                    </Row>
                    <Row>
                      <Col span={13}>
                        <Icon
                          type="eye-o"
                          style={{
                            fontSize: 18
                          }}
                        />{" "}
                        34 participants
                      </Col>
                      <Col span={11}>
                        <Icon type="fork" style={{ fontSize: 16 }} /> 164
                        requests
                      </Col>
                    </Row>
                    <Row style={{ marginTop: 10 }}>
                      <Col span={10}>
                        <Button
                          icon="play-circle-o"
                          loading={this.state.iconLoading}
                          onClick={this.enterLoading}
                        >
                          Train
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button
                          icon="to-top"
                          loading={this.state.iconLoading}
                          onClick={this.enterLoading}
                        >
                          Request Data
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>*/}

              <Card style={{ marginTop: 10 }} bodyStyle={{ paddingRight: 0 }}>
                <Col span={3} style={{ marginRight: 20 }}>
                  <Row style={{ marginBottom: 27, marginTop: "17%" }}>
                    <Icon
                      type="hdd"
                      style={{ color: "#36454f", fontSize: 16 }}
                    />{" "}
                    23 MB
                  </Row>
                  <Row style={{ marginBottom: 27 }}>
                    <Tooltip placement="left" title="57% labeled">
                      <Icon
                        type="file-text"
                        style={{ color: "#36454f", fontSize: 16 }}
                      />{" "}
                      193 labeled
                    </Tooltip>
                  </Row>
                  <Row>
                    <Icon
                      type="eye-o"
                      style={{
                        color: "#36454f",
                        fontSize: 18
                      }}
                    />{" "}
                    34 participants
                  </Row>
                </Col>
                <Col span={16}>
                  <Row style={{ marginBottom: 5 }}>
                    <h1 style={{ color: "#36454f" }}>
                      SVHN Preprocessed Fragments
                    </h1>
                  </Row>
                  <Row>
                    <p style={{ color: "#36454f" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex.
                    </p>
                  </Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col span={4}>
                      <Avatar
                        size="small"
                        style={{ backgroundColor: "#36454f", marginRight: 10 }}
                      >
                        SU
                      </Avatar>
                      <b>Sussbus</b>
                    </Col>
                    <Col>created 10 days ago</Col>
                  </Row>
                  <Row style={{ marginTop: 15 }}>
                    <Tag color="blue">research</Tag>
                    <Tag color="geekblue">patterns</Tag>
                    <Tag color="cyan">classification</Tag>
                  </Row>
                </Col>
                <Col span={4}>
                  <Row type="flex" justify="end">
                    <Button.Group>
                      <Button icon="play-circle-o">Train</Button>
                      <Button icon="to-top">Request</Button>
                    </Button.Group>
                  </Row>
                </Col>
              </Card>

              <Card style={{ marginTop: 10 }} bodyStyle={{ paddingRight: 0 }}>
                <Col span={3} style={{ marginRight: 20 }}>
                  <Row style={{ marginBottom: 27, marginTop: "17%" }}>
                    <Icon
                      type="hdd"
                      style={{ color: "#36454f", fontSize: 16 }}
                    />{" "}
                    23 MB
                  </Row>
                  <Row style={{ marginBottom: 27 }}>
                    <Tooltip placement="left" title="57% labeled">
                      <Icon
                        type="file-text"
                        style={{ color: "#36454f", fontSize: 16 }}
                      />{" "}
                      193 labeled
                    </Tooltip>
                  </Row>
                  <Row>
                    <Icon
                      type="eye-o"
                      style={{
                        color: "#36454f",
                        fontSize: 18
                      }}
                    />{" "}
                    34 participants
                  </Row>
                </Col>
                <Col span={16}>
                  <Row style={{ marginBottom: 5 }}>
                    <h1 style={{ color: "#36454f" }}>
                      SVHN Preprocessed Fragments
                    </h1>
                  </Row>
                  <Row>
                    <p style={{ color: "#36454f" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex.
                    </p>
                  </Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col span={4}>
                      <Avatar
                        size="small"
                        style={{ backgroundColor: "#36454f", marginRight: 10 }}
                      >
                        SU
                      </Avatar>
                      <b>Sussbus</b>
                    </Col>
                    <Col>created 10 days ago</Col>
                  </Row>
                  <Row style={{ marginTop: 15 }}>
                    <Tag color="blue">research</Tag>
                    <Tag color="geekblue">patterns</Tag>
                    <Tag color="cyan">classification</Tag>
                  </Row>
                </Col>
                <Col span={4}>
                  <Row type="flex" justify="end">
                    <Button.Group>
                      <Button icon="play-circle-o">Train</Button>
                      <Button
                        icon="to-top"
                        loading={this.state.iconLoading}
                        onClick={this.enterLoading}
                      >
                        Request
                      </Button>
                    </Button.Group>
                  </Row>
                </Col>
              </Card>
            </Col>
          </Row>
        </Content>
        <div>
          <Modal
            title="API Request"
            width="60%"
            visible={this.state.visible}
            maskClosable="true"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Row>
              <Col span={4}>
                <p style={{ marginTop: 10 }}>Amount Unlabeled</p>
              </Col>
              <Col span={8}>
                <Slider step={5} tipFormatter={formatter} />
              </Col>
            </Row>
            <Tooltip visible={this.state.isCopied} title="Copied!">
              <CopyToClipboard
                text="This has been copied!"
                onCopy={this.handleCopy}
              >
                <p
                  style={{
                    position: "absolute",
                    marginLeft: "89%",
                    marginTop: 5,
                    fontWeight: "500"
                  }}
                >
                  Copy
                </p>
              </CopyToClipboard>
            </Tooltip>
            <SyntaxHighlighter
              language="javascript"
              style={light}
              showLineNumbers={true}
              lineNumberStyle={{
                color: "#C1C7CD",
                marginLeft: 5,
                fontSize: 12
              }}
              customStyle={{
                backgroundColor: "#f2f4f5",
                borderRadius: 5
              }}
            >
              {
                "function addTodo(text) { \n    return { \n        type: ADD_TODO, \n        text \n    } \n}"
              }
            </SyntaxHighlighter>
          </Modal>
        </div>
      </Layout>
    );
  }
}
export default Data;
