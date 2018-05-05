import React from 'react'
import { Modal, Row, Col, Tooltip, Slider } from 'antd'
import { withState, withHandlers, compose } from 'recompose'
import CopyToClipboard from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { light } from 'react-syntax-highlighter/styles/prism'

import store from '../../store/store'
import { stopDataRequest } from '../../actions/dataRequest'

const RequestData = ({
    isCopied,
    handleCopy,
    visible,
    onOk,
    cancelDataRequest
}) => {
    function formatter(value) {
        return `${value}%`
    }

    return (
        <Modal
            title="API Request"
            width="60%"
            visible={visible}
            maskClosable="true"
            onOk={onOk}
            onCancel={cancelDataRequest}
        >
            <Row>
                <Col span={4}>
                    <p style={{ marginTop: 10 }}>Amount Unlabeled</p>
                </Col>
                <Col span={8}>
                    <Slider step={5} tipFormatter={formatter} />
                </Col>
            </Row>
            <Tooltip visible={isCopied} title="Copied!">
                <CopyToClipboard
                    text="This has been copied!"
                    onCopy={handleCopy}
                >
                    <p
                        style={{
                            position: 'absolute',
                            marginLeft: '89%',
                            marginTop: 5,
                            fontWeight: '500'
                        }}
                    >
                        Copy
                    </p>
                </CopyToClipboard>
            </Tooltip>
            <SyntaxHighlighter
                language="javascript"
                style={light}
                showLineNumbers={true}
                lineNumberStyle={{
                    color: '#C1C7CD',
                    marginLeft: 5,
                    fontSize: 12
                }}
                customStyle={{
                    backgroundColor: '#f2f4f5',
                    borderRadius: 5
                }}
            >
                {
                    'function addTodo(text) { \n    return { \n        type: ADD_TODO, \n        text \n    } \n}'
                }
            </SyntaxHighlighter>
        </Modal>
    )
}
const enhance = compose(
    withState('isCopied', 'copyRequest', false),
    withHandlers({
        handleCopy: props => event => {
            props.copyRequest(true)
            setTimeout(function() {
                props.copyRequest(false)
            }, 1500)
        },
        cancelDataRequest: props => event => {
            store.dispatch(stopDataRequest())
        }
    })
)
export default enhance(RequestData)
