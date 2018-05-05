import React from 'react'
import { withState, withHandler, compose } from 'recompose'
import { Modal } from 'antd'

import TextSentiment from './TextSentiment'
import ImageClassificiation from './ImageClassification'

const LabelingContainer = ({ labelType }) => {
    return (
        <Modal
            title="Labeling - SVHN Preprocessed Fragments"
            visible={true}
            width="60%"
        >
            {labelType == 'text-sentiment' && <TextSentiment />}
            {labelType == 'image-classification' && <ImageClassificiation />}
        </Modal>
    )
}

export default LabelingContainer
