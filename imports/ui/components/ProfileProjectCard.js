import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { withState, withhandlers, compose } from 'recompose';

const ProfileProjectCard = ({ projectTitle, projectBody }) => {
	return (
		<Row>
			<a onClick={null}>
				<Col span={1}>
					<Avatar
						size="large"
						src="https://kaggle2.blob.core.windows.net/datasets-images/3398/5506/dc5f350b189d3a41190660a37b8578a5/dataset-thumbnail.png"
					/>
				</Col>
				<Col span={23}>
					<h4>{projectTitle}</h4>
					<p style={{ color: 'gray' }}>{projectBody}</p>
				</Col>
			</a>
		</Row>
	);
};

const enhance = compose();
export default enhance(ProfileProjectCard);
