import React from 'react';
import { Card, Col, Row, Icon, Avatar, Button, Tag, Tooltip } from 'antd';
import { withState, withHandlers, compose, mapProps } from 'recompose';

const ProjectCard = ({
	isRequestLoading,
	loadRequest,
	requestData,
	isTrainingLoading,
	loadTraining,
	startTraining,
	projectTitle,
	projectDescription,
	projectCreator
}) => {
	return (
		<Card style={{ marginTop: 10 }} bodyStyle={{ paddingRight: 0 }}>
			<Col span={3} style={{ marginRight: 20 }}>
				<Row style={{ marginBottom: 27, marginTop: '17%' }}>
					<Icon
						type="hdd"
						style={{ color: '#36454f', fontSize: 16 }}
					/>{' '}
					23 MB
				</Row>
				<Row style={{ marginBottom: 27 }}>
					<Tooltip placement="left" title="57% labeled">
						<Icon
							type="file-text"
							style={{ color: '#36454f', fontSize: 16 }}
						/>{' '}
						193 labeled
					</Tooltip>
				</Row>
				<Row>
					<Icon
						type="eye-o"
						style={{
							color: '#36454f',
							fontSize: 18
						}}
					/>{' '}
					34 participants
				</Row>
			</Col>
			<Col span={16}>
				<Row style={{ marginBottom: 5 }}>
					<h1 style={{ color: '#36454f' }}>{projectTitle}</h1>
				</Row>
				<Row>
					<p style={{ color: '#36454f' }}>
						{projectDescription}
					</p>
				</Row>
				<Row style={{ marginTop: 10 }}>
					<Col span={4}>
						<Avatar
							size="small"
							style={{
								backgroundColor: '#36454f',
								marginRight: 10
							}}
						>
							SU
						</Avatar>
						<b>{projectCreator}</b>
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
						<Button
							icon="play-circle-o"
							onClick={startTraining}
							loading={isTrainingLoading}
						>
							Train
						</Button>
						<Button
							icon="to-top"
							onClick={requestData}
							loading={isRequestLoading}
						>
							Request
						</Button>
					</Button.Group>
				</Row>
			</Col>
		</Card>
	);
};
const enhance = compose(
	withState('isRequestLoading', 'loadRequest', false),
	withState('isTrainingLoading', 'loadTraining', false),
	withHandlers({
		requestData: props => event => {
			props.loadRequest(true);
			setTimeout(function() {
				props.loadRequest(false);
			}, 1500);
		},
		startTraining: props => event => {
			props.loadTraining(true);
			setTimeout(function() {
				props.loadTraining(false);
			}, 1500);
		}
	})
);
export default enhance(ProjectCard);
