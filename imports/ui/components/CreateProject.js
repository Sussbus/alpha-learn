import React from 'react';
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
	Icon
} from 'antd';
import { withState, withHandlers, withProps, compose } from 'recompose';

const CreateProject = ({
	visible,
	onOk,
	onCancel,
	stepNumber,
	nextSlide,
	changeSlide,
	onRef,
	handleSubmit,
	form
}) => {
	return (
		<Modal
			width="70%"
			title="Create Project"
			visible={visible}
			onOk={onOk}
			onCancel={onCancel}
		>
			<div style={{ marginBottom: 10 }}>
				<Carousel ref={onRef}>
					<div style={{ height: 300 }}>
						<Row style={{ marginTop: '5%' }}>
							<Form onSubmit={handleSubmit}>
								<Row>
									<Col span={4}>
										<Form.Item>
											{form.getFieldDecorator(
												'projectName',
												{
													rules: [
														{
															required: true
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
									<Col span={8}>
										<Form.Item>
											{form.getFieldDecorator(
												'projectDescription',
												{
													rules: [
														{
															required: true
														}
													]
												}
											)(
												<Input placeholder="Project Description" />
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
							style={{ height: '85%' }}
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
							</Upload.Dragger>
						</Col>
					</div>
					<div style={{ height: 300 }}>
						<p>Some content... 3</p>
						<p>Some content...</p>
						<p>Some content...</p>
					</div>
				</Carousel>
			</div>
			<Steps current={stepNumber}>
				<Steps.Step
					title="Name your project"
					description="add a project title."
				/>
				<Steps.Step
					title="Attach a dataset"
					description="add dataset for labeling."
				/>
				<Steps.Step
					title="Customize your labeling interface"
					description="This is a description."
				/>
			</Steps>
			<Button style={{ marginTop: 10 }} onClick={nextSlide}>
				Next
			</Button>
		</Modal>
	);
};
const enhance = compose(
	withState('stepNumber', 'changeSlide', 0),
	withHandlers({
		onRef: () => ref => (carousel = ref),
		nextSlide: props => event => {
			carousel.next();
			props.changeSlide(props.stepNumber + 1);
			if (props.stepNumber > 2) {
				props.changeSlide(0);
			}
		},
		handleSubmit: props => event => {
			event.preventDefault();
			form.validateFields((err, values) => {
				if (!err) {
					console.log('Received values of form: ', values);
				}
			});
		}
	})
);
const CreateProjectForm = Form.create()(CreateProject);

export default enhance(CreateProjectForm);
