import React from 'react';
import { Modal, Carousel } from 'antd';

const CreateProject = ({ visible, onOk, onCancel }) => {
	return (
		<Modal
			width="70%"
			title="Basic Modal"
			bodyStyle={{ backgroundColor: 'lightblue' }}
			visible={visible}
			onOk={onOk}
			onCancel={onCancel}
		>
			<div style={{ marginBottom: 30 }}>
				<Carousel ref={carousel => (this.carousel = carousel)}>
					<div>
						<p>Some content...</p>
						<p>Some content...</p>
						<p>Some content...</p>
					</div>
					<div>
						<p>Some content...</p>
						<p>Some content...</p>
						<p>Some content...</p>
					</div>
					<div>
						<p>Some content...</p>
						<p>Some content...</p>
						<p>Some content...</p>
					</div>
					<div>
						<p>Some content...</p>
						<p>Some content...</p>
						<p>Some content...</p>
					</div>
				</Carousel>
			</div>
			<Steps current={this.state.step}>
				<Steps.Step
					title="Name your project"
					description="This is a description."
				/>
				<Steps.Step
					title="Attach a dataset"
					description="This is a description."
				/>
				<Steps.Step
					title="Customize your labeling interface"
					description="This is a description."
				/>
			</Steps>
			<Button onClick={this.nextStep}>Next</Button>
		</Modal>
	);
};

export default CreateProject;
