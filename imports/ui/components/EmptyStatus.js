import React from 'react';
import Lottie from 'react-lottie';
import { Row, Col } from 'antd';

import animationData from '../../assets/lotties/empty_status.json';

const EmptyStatus = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData
	};
	return (
		<Row
			justifycontnet="center"
			style={{ marginTop: 10, marginBottom: 20 }}
		>
			<Lottie
				options={defaultOptions}
				height={300}
				isStopped={false}
				isPaused={false}
			/>
			<Col span={22} offset={10}>
				<p
					style={{
						color: 'gray',
						fontSize: 16,
						marginLeft: '1.75%'
					}}
				>
					You currently have no projects
				</p>
			</Col>
		</Row>
	);
};

export default EmptyStatus;
