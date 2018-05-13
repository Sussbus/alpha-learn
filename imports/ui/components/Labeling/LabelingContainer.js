import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import { Col, Row, Modal, Button, Popconfirm } from 'antd'

import TextSentiment from './TextSentiment'
import ImageClassificiation from './ImageClassification'

import store from '../../../store/store'
import { stopTraining } from '../../../actions/training'

const LabelingContainer = ({ labelingInterface, visible, stopTraining }) => {
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
                            Labeling - SVHN Preprocessed Fragments
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
            {labelingInterface == 'TEXT_SENTIMENT' && <TextSentiment />}
            {labelingInterface == 'IMAGE_CLASSIFICATION' && (
                <ImageClassificiation />
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
export default enhance(LabelingContainer)
