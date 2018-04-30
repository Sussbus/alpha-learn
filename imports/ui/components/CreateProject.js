import React from "react"
import {
    Modal,
    Carousel,
    Steps,
    Button,
    Form,
    Input,
    Row,
    Col,
    Upload,
    Icon,
    Divider
} from "antd"
import { withState, withHandlers, withProps, compose } from "recompose"

const CreateProject = ({
    visible,
    onOk,
    onCancel,
    stepNumber,
    nextSlide,
    previousSlide,
    changeSlide,
    onRef,
    handleSubmit,
    form
}) => {
    return (
        <Modal
            width="60%"
            title={<h2>Create Project</h2>}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
        >
            <Row>
                <Col span={6} style={{ paddingTop: 25 }}>
                    <Steps direction="vertical" current={stepNumber}>
                        <Steps.Step
                            title="Name your project"
                            description="add project info."
                        />
                        <Steps.Step
                            title="Attach a dataset"
                            description="add dataset for labeling."
                        />
                        <Steps.Step
                            title="Customize labeling interface"
                            description="select or customize labeling interface."
                        />
                    </Steps>
                    <Row style={{ marginTop: 30 }}>
                        {stepNumber < 2 ? (
                            <Button
                                type="primary"
                                onClick={nextSlide}
                                style={{ marginRight: 10, width: 65 }}
                            >
                                Next
                            </Button>
                        ) : null}
                        {stepNumber == 2 ? (
                            <Button
                                type="primary"
                                style={{ marginRight: 10, width: 65 }}
                            >
                                Done
                            </Button>
                        ) : null}
                        {stepNumber > 0 ? (
                            <Button onClick={previousSlide}>Previous</Button>
                        ) : null}
                    </Row>
                </Col>
                <Col span={18}>
                    <Divider
                        type="vertical"
                        style={{ float: "left", height: 290 }}
                    />
                    <Carousel ref={onRef}>
                        <div style={{ height: 300, paddingLeft: 30 }}>
                            <Row style={{ marginTop: "5%" }}>
                                <Form onSubmit={handleSubmit}>
                                    <Row style={{ marginBottom: 15 }}>
                                        <Col span={8}>
                                            <Form.Item>
                                                {form.getFieldDecorator(
                                                    "projectName",
                                                    {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please input the project name"
                                                            }
                                                        ]
                                                    }
                                                )(
                                                    <Input
                                                        size="large"
                                                        placeholder="Project Name"
                                                    />
                                                )}
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Item>
                                                {form.getFieldDecorator(
                                                    "projectDescription",
                                                    {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please input the project description"
                                                            }
                                                        ]
                                                    }
                                                )(
                                                    //Form validation error messages currently broken on TextAreas
                                                    <Input.TextArea
                                                        rows={2}
                                                        placeholder="Project Description..."
                                                    />
                                                )}
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    {/*<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
								>
									Log in
								</Button>
							</Form.Item>*/}
                                </Form>
                            </Row>
                        </div>
                        <div style={{ height: 300 }}>
                            <Col span={18} offset={3} style={{ height: "85%" }}>
                                <Upload.Dragger>
                                    <Row>
                                        <Icon
                                            style={{
                                                fontSize: 25,
                                                marginBottom: 20
                                            }}
                                            type="upload"
                                        />
                                    </Row>
                                    <h4>Drag Files Here</h4>
                                </Upload.Dragger>
                            </Col>
                        </div>
                        <div
                            style={{
                                height: 300,
                                paddingLeft: 30,
                                paddingRight: 10,
                                paddingTop: 25
                            }}
                        >
                            <Row align="middle" style={{ marginBottom: 20 }}>
                                <Col span={20}>
                                    <h3 style={{ marginBottom: 0 }}>
                                        Image Classification
                                    </h3>
                                    <p style={{ marginTop: 0 }}>
                                        An image classification template.
                                    </p>
                                </Col>
                                <Col span={4} style={{ paddingTop: 8 }}>
                                    <Button>
                                        Select<Icon type="arrow-right" />
                                    </Button>
                                </Col>
                            </Row>
                            <Divider type="horizontal" />
                            <Row align="middle" style={{ marginBottom: 20 }}>
                                <Col span={20}>
                                    <h3 style={{ marginBottom: 0 }}>
                                        Text Classification
                                    </h3>
                                    <p style={{ marginTop: 0 }}>
                                        A basic text classification template.
                                    </p>
                                </Col>
                                <Col span={4}>
                                    <Button>
                                        Select<Icon type="arrow-right" />
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
                                <Col span={4}>
                                    <Button>
                                        Select<Icon type="arrow-right" />
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </Modal>
    )
}
const enhance = compose(
    withState("stepNumber", "changeSlide", 0),
    withHandlers({
        onRef: () => ref => (carousel = ref),
        nextSlide: props => event => {
            carousel.next()
            props.changeSlide(props.stepNumber + 1)
        },
        previousSlide: props => event => {
            carousel.prev()
            props.changeSlide(props.stepNumber - 1)
        },
        handleSubmit: props => event => {
            event.preventDefault()
            form.validateFields((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values)
                }
            })
        }
    })
)
const CreateProjectForm = Form.create()(CreateProject)

export default enhance(CreateProjectForm)
