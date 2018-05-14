import React from 'react'
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
    Divider,
    Select
} from 'antd'
import { withState, withHandlers, withProps, compose } from 'recompose'
import { connect } from 'react-redux'

import store from '../../store/store'
import { closeCreateProject } from '../../actions/createProject'

const CreateProject = ({
    visible,
    onCancel,
    stepNumber,
    nextSlide,
    previousSlide,
    changeSlide,
    onRef,
    form,
    labelType,
    createProject,
    handleTags,
    handleLabelingInterface,
    isCreatingProject
}) => {
    return (
        <Modal
            width="60%"
            style={{ marginTop: '4.5%' }}
            title={<h2>Create Project</h2>}
            visible={isCreatingProject}
            onCancel={onCancel}
            footer={null}
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
                    <Row style={{ marginTop: 30, paddingLeft: '3%' }}>
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
                                onClick={createProject}
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
                        style={{ float: 'left', height: 353 }}
                    />
                    <Carousel ref={onRef}>
                        <div style={{ height: 300, paddingLeft: 30 }}>
                            <Row style={{ marginTop: 60 }}>
                                <Form onSubmit={null}>
                                    <Row style={{ marginBottom: 15 }}>
                                        <Col span={10}>
                                            <Form.Item>
                                                {form.getFieldDecorator(
                                                    'projectName',
                                                    {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Please input the project name'
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
                                        <Col span={16}>
                                            <Form.Item>
                                                {form.getFieldDecorator(
                                                    'projectDescription',
                                                    {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Please input the project description'
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
                                    <Row>
                                        <Col span={8}>
                                            <Form.Item
                                                style={{ maxHeight: 100 }}
                                            >
                                                {form.getFieldDecorator(
                                                    'projectTags',
                                                    {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please select project's tags"
                                                            }
                                                        ]
                                                    }
                                                )(
                                                    <Select
                                                        mode="multiple"
                                                        placeholder="Select Tags..."
                                                        onChange={handleTags}
                                                    >
                                                        <Select.Option
                                                            value="art"
                                                            key="art"
                                                        >
                                                            Art
                                                        </Select.Option>
                                                        <Select.Option
                                                            value="classification"
                                                            key="classification"
                                                        >
                                                            Classification
                                                        </Select.Option>
                                                        <Select.Option
                                                            value="creativity"
                                                            key="creativity"
                                                        >
                                                            Creativity
                                                        </Select.Option>
                                                        <Select.Option
                                                            value="patterns"
                                                            key="patterns"
                                                        >
                                                            Patterns
                                                        </Select.Option>
                                                        <Select.Option
                                                            value="research"
                                                            key="research"
                                                        >
                                                            Research
                                                        </Select.Option>
                                                    </Select>
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
                            <Col
                                span={18}
                                offset={3}
                                style={{ height: '85%', paddingTop: 55 }}
                            >
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
                                    <p style={{ color: 'gray' }}>
                                        or click to upload
                                    </p>
                                </Upload.Dragger>
                            </Col>
                        </div>
                        <div
                            style={{
                                height: 300,
                                paddingLeft: 30,
                                paddingRight: 10,
                                paddingTop: 35
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
                                <Col span={4} style={{ paddingTop: 4 }}>
                                    {labelType == 'IMAGE_CLASSIFICATION' ? (
                                        <Button
                                            type="primary"
                                            id="IMAGE_CLASSIFICATION"
                                        >
                                            Select<Icon type="arrow-right" />
                                        </Button>
                                    ) : (
                                        <Button
                                            id="IMAGE_CLASSIFICATION"
                                            onClick={handleLabelingInterface}
                                        >
                                            Select<Icon type="arrow-right" />
                                        </Button>
                                    )}
                                </Col>
                            </Row>
                            <Divider type="horizontal" />
                            <Row align="middle" style={{ marginBottom: 20 }}>
                                <Col span={20}>
                                    <h3 style={{ marginBottom: 0 }}>
                                        Text Sentiment
                                    </h3>
                                    <p style={{ marginTop: 0 }}>
                                        A basic text classification template.
                                    </p>
                                </Col>
                                <Col span={4} style={{ paddingTop: 3 }}>
                                    {labelType == 'TEXT_SENTIMENT' ? (
                                        <Button
                                            type="primary"
                                            id="TEXT_SENTIMENT"
                                        >
                                            Select<Icon type="arrow-right" />
                                        </Button>
                                    ) : (
                                        <Button
                                            id="TEXT_SENTIMENT"
                                            onClick={handleLabelingInterface}
                                        >
                                            Select<Icon type="arrow-right" />
                                        </Button>
                                    )}
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
                                <Col span={4} style={{ paddingTop: 4 }}>
                                    {labelType == 'IMAGE_SEGMENTATION' ? (
                                        <Button
                                            type="primary"
                                            id="IMAGE_SEGMENTATION"
                                        >
                                            Select<Icon type="arrow-right" />
                                        </Button>
                                    ) : (
                                        <Button
                                            id="IMAGE_SEGMENTATION"
                                            onClick={handleLabelingInterface}
                                        >
                                            Select<Icon type="arrow-right" />
                                        </Button>
                                    )}
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
    withState('stepNumber', 'changeSlide', 0),
    withState('projTags', 'addTags', []),
    withState('labelType', 'handleLabelType', ''),
    withHandlers({
        onCancel: props => event => {
            store.dispatch(closeCreateProject())
        },
        onRef: () => ref => (carousel = ref),
        nextSlide: props => event => {
            carousel.next()
            props.changeSlide(props.stepNumber + 1)
        },
        previousSlide: props => event => {
            carousel.prev()
            props.changeSlide(props.stepNumber - 1)
        },
        handleTags: props => event => {
            props.addTags(event)
        },
        handleLabelingInterface: props => event => {
            props.handleLabelType(event.target.id)
        },
        createProject: props => event => {
            const project = {
                title: projectName.value,
                body: projectDescription.value,
                project_tags: props.projTags,
                labeling_interface: props.labelType
            }

            Meteor.call('Projects.insert', project, error => {
                if (!error) {
                    console.log('Project successfully created!')
                } else {
                    console.log(error)
                }
            })
            store.dispatch(closeCreateProject())
        }
    })
)
const CreateProjectForm = Form.create()(CreateProject)

const mapStateToProps = (state, ownProps) => {
    return {
        isCreatingProject: state.createProject.isCreatingProject
    }
}

const ConnectedCreateProject = connect(mapStateToProps)(CreateProjectForm)

export default enhance(ConnectedCreateProject)
