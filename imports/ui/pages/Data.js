import React, { Component } from 'react';
import { Layout, Row, Col, Input, Select, Spin } from 'antd';
import { withTracker } from 'meteor/react-meteor-data';
import CopyToClipboard from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { light } from 'react-syntax-highlighter/styles/prism';
import moment from 'moment';

import ProjectCard from '../components/ProjectCard';
import RequestData from '../components/RequestData';

import { Projects } from '../../api/projects/projects';

const { Content } = Layout;

class Data extends Component {
	state = {
		visible: false
	};

	handleOk = () => {
		this.setState({ visible: false });
		const params = {
			title: 'Project title',
			body: 'Project body',
			tags: ['research', 'patterns', 'classification']
		};
		Meteor.call('Projects.insert', params, error => {
			if (!error) {
				console.log('Project added!');
			} else {
				console.log(error);
			}
		});
	};
	handleCancel = () => {
		this.setState({ visible: false });
		console.log('canceled');
	};

	render() {
		const { projects, loading } = this.props;

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
						<Select
							mode="tags"
							placeholder="Tags"
							style={{ width: 180, marginLeft: 15 }}
							tokenSeparators={[',']}
						>
							<Select.Option key="1">
								Hardware
							</Select.Option>
							<Select.Option key="2">
								Software
							</Select.Option>
							<Select.Option key="3">
								General
							</Select.Option>
							<Select.Option key="4">More</Select.Option>
						</Select>
					</Col>
					<Row style={{ marginTop: '5%' }}>
						<Col span={20} offset={2}>
							{loading ? (
								<Col
									span={24}
									offset={12}
									style={{ marginTop: 10 }}
								>
									<Spin />
								</Col>
							) : null}
							{projects.map(project => (
								<ProjectCard
									key={project._id}
									projectTitle={
										project.project_title
									}
									projectDescription={
										project.project_body
									}
									projectCreator="Sussbus"
									timeStamp={moment(
										project.createdAt
									).fromNow()}
								/>
							))}
							<RequestData
								visible={this.state.visible}
								onOk={this.handleOk}
								onCancel={this.handleCancel}
							/>
						</Col>
					</Row>
				</Content>
			</Layout>
		);
	}
}

export default (DataContainer = withTracker(() => {
	const handle = Meteor.subscribe('Projects.pub.list');
	const loading = !handle.ready();

	return {
		projects: Projects.find({}, { sort: { createdAt: -1 } }).fetch(),
		user: Meteor.user(),
		loading: loading
	};
})(Data));
