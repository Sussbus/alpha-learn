import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import { Col, Row, Modal, Button, Popconfirm } from 'antd'
import { connect } from 'react-redux'

import TextSentiment from './TextSentiment'
import ImageClassificiation from './ImageClassification'

import store from '../../../store/store'
import { stopTraining } from '../../../actions/training'

const LabelingContainer = ({
    labelingInterface,
    visible,
    stopTraining,
    project,
    loading,
    projectID,
    fetchedProject,
    isProjLoaded
}) => {
    return (
        <Modal
            title={
                <Row style={{ height: 25 }}>
                    <Col span={20}>
                        <p
                            style={{
                                fontSize: 16,
                                fontWeight: '600',
                                marginTop: '0.3%'
                            }}
                        >
                            {'Labeling - ' + fetchedProject.project_title}
                        </p>
                    </Col>
                    <Col span={2} style={{ marginLeft: '3.2%' }}>
                        <Popconfirm
                            title="Are you would like to stop training?"
                            okText="Yes"
                            cancelText="No"
                            placement="bottomLeft"
                            onConfirm={stopTraining}
                        >
                            <Button style={{ top: -4 }} type="danger">
                                Stop Training
                            </Button>
                        </Popconfirm>
                    </Col>
                </Row>
            }
            visible={visible}
            footer={null}
            closable={false}
            width="60%"
        >
            {isProjLoaded &&
                fetchedProject.labeling_interface == 'IMAGE_CLASSIFICATION' && (
                    <ImageClassificiation />
                )}
            {isProjLoaded &&
                fetchedProject.labeling_interface == 'TEXT_SENTIMENT' && (
                    <TextSentiment />
                )}
        </Modal>
    )
}

const enhance = compose(
    withHandlers({
        stopTraining: props => event => {
            store.dispatch(stopTraining())
        }
    })
)
const EnhanceLabelingContainer = enhance(LabelingContainer)

const mapStateToProps = (state, ownProps) => {
    return {
        visible: state.training.isTraining,
        fetchedProject: state.training.project,
        isProjLoaded: state.training.projectLoaded
    }
}

export default connect(mapStateToProps)(EnhanceLabelingContainer)
