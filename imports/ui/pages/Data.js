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
	Divider,
	Avatar,
	Tag,
	Select,
	Modal,
	Slider
} from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { light } from 'react-syntax-highlighter/styles/prism';
import ProjectCard from '../components/ProjectCard';
import RequestData from '../components/RequestData';

const { Content } = Layout;

class Data extends Component {
	state = {
		visible: true
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
	};

	projectTitle = 'SVHN Preprocessed Fragments';
	projectDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.';
	projectCreator = 'Sussbus';

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
							<ProjectCard
								projectTitle={this.projectTitle}
								projectDescription={
									this.projectDescription
								}
								projectCreator={this.projectCreator}
							/>
							<ProjectCard
								projectTitle={this.projectTitle}
								projectDescription={
									this.projectDescription
								}
								projectCreator={this.projectCreator}
							/>
							<ProjectCard
								projectTitle={this.projectTitle}
								projectDescription={
									this.projectDescription
								}
								projectCreator={this.projectCreator}
							/>
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
export default Data;
