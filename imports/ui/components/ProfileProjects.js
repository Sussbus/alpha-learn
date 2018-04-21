import React from 'react';
import { Modal, Layout, Row, Col, Icon, Divider, Avatar, Button } from 'antd';
import { withState, withHandlers, compose } from 'recompose';

import CreateProject from './CreateProject';

const { Content } = Layout;

const ProfileProjects = ({
	isOpen,
	createProject,
	createNewProject,
	handleOk,
	handleCancel
}) => {
	return (
		<Content>
			<Row>
				<a onClick={createNewProject}>
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
								style={{
									fontSize: 24,
									color: '#475660'
								}}
							/>
						</span>
						<h2 style={{ color: '#475660' }}>
							Create New Project
						</h2>
					</Col>
				</a>
			</Row>
			<Divider type="horizontal" />
			<Row>
				<CreateProject
					onOk={handleOk}
					onCancel={handleCancel}
					visible={isOpen}
				/>
				<a onClick={createNewProject}>
					<Col span={1}>
						<Avatar
							size="large"
							src="https://kaggle2.blob.core.windows.net/datasets-images/3398/5506/dc5f350b189d3a41190660a37b8578a5/dataset-thumbnail.png"
						/>
					</Col>
					<Col span={23}>
						<h4>SVHN Preprocessed Fragments</h4>
						<p style={{ color: 'gray' }}>
							Help classify different kinds of numbers.
							This will help make for math solving and
							website data scraping.
						</p>
					</Col>
				</a>
			</Row>
			<Divider type="horizontal" />
			<Row>
				<a onClick={null}>
					<Col span={1}>
						<Avatar
							size="large"
							src="https://kaggle2.blob.core.windows.net/datasets-images/3398/5506/dc5f350b189d3a41190660a37b8578a5/dataset-thumbnail.png"
						/>
					</Col>
					<Col span={23}>
						<h4>SVHN Preprocessed Fragments</h4>
						<p style={{ color: 'gray' }}>
							Help classify different kinds of numbers.
							This will help make for math solving and
							website data scraping.
						</p>
					</Col>
				</a>
			</Row>
			<Divider type="horizontal" />
			<Row>
				<a onClick={null}>
					<Col span={1}>
						<Avatar
							size="large"
							src="https://kaggle2.blob.core.windows.net/datasets-images/3398/5506/dc5f350b189d3a41190660a37b8578a5/dataset-thumbnail.png"
						/>
					</Col>
					<Col span={23}>
						<h4>SVHN Preprocessed Fragments</h4>
						<p style={{ color: 'gray' }}>
							Help classify different kinds of numbers.
							This will help make for math solving and
							website data scraping.
						</p>
					</Col>
				</a>
			</Row>
		</Content>
	);
};

const enhance = compose(
	withState('isOpen', 'createProject', false),
	withHandlers({
		createNewProject: props => event => {
			props.createProject(true);
		},
		handleOk: props => event => {
			props.createProject(false);
		},
		handleCancel: props => event => {
			props.createProject(false);
		}
	})
);

export default enhance(ProfileProjects);
