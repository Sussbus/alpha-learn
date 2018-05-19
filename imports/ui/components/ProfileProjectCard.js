import React from 'react'
import { Row, Col, Avatar, Icon } from 'antd'
import { withState, withhandlers, compose, withHandlers } from 'recompose'

import store from '../../store/store'
import { openProjectOverview } from '../../actions/projectOverview'

const ProfileProjectCard = ({
    projectID,
    projectTitle,
    projectBody,
    numLabeled,
    isArchived,
    openProjectOverview
}) => {
    return (
        <Row>
            <a onClick={openProjectOverview}>
                {/* <Col span={1}>
                     <Avatar
                        size="large"
                        src="https://kaggle2.blob.core.windows.net/datasets-images/3398/5506/dc5f350b189d3a41190660a37b8578a5/dataset-thumbnail.png"
                   />
                </Col>*/}
                <Col span={2}>
                    <Row style={{ marginBottom: 8 }}>
                        <Icon
                            type="hdd"
                            style={{ color: '#36454f', fontSize: 16 }}
                        />{' '}
                        <span
                            style={{
                                MozUserSelect: 'none',
                                WebkitUserSelect: 'none',
                                msUserSelect: 'none',
                                color: '#36454f'
                            }}
                        >
                            23 MB
                        </span>
                    </Row>
                    <Row style={{ marginBottom: 8 }}>
                        <Icon
                            type="file-text"
                            style={{ color: '#36454f', fontSize: 16 }}
                        />{' '}
                        <span
                            style={{
                                MozUserSelect: 'none',
                                WebkitUserSelect: 'none',
                                msUserSelect: 'none',
                                color: '#36454f'
                            }}
                        >
                            {numLabeled} labeled
                        </span>
                    </Row>
                    {/*<Icon
                            type="clock-circle"
                            style={{ color: '#eaa800', fontSize: 16 }}
                        />*/}
                    <Row>
                        <Icon
                            type={
                                !isArchived
                                    ? 'check-circle'
                                    : 'exclamation-circle'
                            }
                            style={{
                                color: !isArchived ? 'lightgreen' : '#ffae19',
                                fontSize: 16
                            }}
                        />{' '}
                        <span
                            style={{
                                MozUserSelect: 'none',
                                WebkitUserSelect: 'none',
                                msUserSelect: 'none',
                                color: '#36454f'
                            }}
                        >
                            {!isArchived ? 'Active' : 'Archived'}
                        </span>
                    </Row>
                </Col>
                <Col span={20}>
                    <h3>{projectTitle}</h3>
                    <p style={{ color: 'gray' }}>{projectBody}</p>
                </Col>
            </a>
        </Row>
    )
}

const enhance = compose(
    withHandlers({
        openProjectOverview: props => event => {
            store.dispatch(openProjectOverview(props.projectID))
        }
    })
)
export default enhance(ProfileProjectCard)
