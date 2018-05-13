import React from 'react'
import { Modal, Row, Col, Tooltip, Slider, Select } from 'antd'
import { withState, withHandlers, compose } from 'recompose'
import CopyToClipboard from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { light } from 'react-syntax-highlighter/styles/prism'
import { connect } from 'react-redux'

import store from '../../store/store'
import { stopDataRequest } from '../../actions/dataRequest'

const RequestData = ({
    isCopied,
    handleCopy,
    visible,
    onOk,
    cancelDataRequest,
    projectID,
    changeAmountLabeled,
    numLabeled,
    switchFormat,
    currentFormat
}) => {
    function formatter(value) {
        return `${value}%`
    }
    const API_REQUEST =
        `fetch('https://alphalearn.io/api', {
    API_KEY: YOUR_API_KEY,
    format: '` +
        currentFormat +
        `',
    projectID: ` +
        projectID +
        `,
    labeled: ` +
        numLabeled +
        `
})`

    return (
        <Modal
            title="API Request"
            width="60%"
            visible={visible}
            maskClosable="true"
            onOk={onOk}
            onCancel={cancelDataRequest}
        >
            <Row
                style={{
                    marginLeft: '1%',
                    padding: 10
                }}
            >
                <p
                    style={{
                        fontSize: 20,
                        fontWeight: '600',
                        paddingBottom: 0,
                        marginBottom: 0
                    }}
                >
                    Options
                </p>
                <Row type="flex" justify="middle">
                    <Col span={4}>
                        <p style={{ fontSize: 16, fontWeight: '550' }}>
                            Amount Labeled
                        </p>
                    </Col>
                    <Col span={8}>
                        <Slider
                            defaultValue={100}
                            step={5}
                            onChange={changeAmountLabeled}
                            tipFormatter={formatter}
                        />
                    </Col>
                    <Col span={2} offset={2}>
                        <p style={{ fontSize: 16, fontWeight: '550' }}>
                            Format
                        </p>
                    </Col>
                    <Col span={3}>
                        <Select
                            defaultValue="JSON"
                            value={currentFormat}
                            onChange={switchFormat}
                            style={{ width: 82 }}
                        >
                            <Select.Option value="JSON">JSON</Select.Option>
                            <Select.Option value="CSV">CSV</Select.Option>
                            <Select.Option value="XML">XML</Select.Option>
                        </Select>
                    </Col>
                </Row>
            </Row>
            <Tooltip visible={isCopied} title="Copied!">
                <CopyToClipboard text={API_REQUEST} onCopy={handleCopy}>
                    <p
                        style={{
                            position: 'absolute',
                            marginLeft: '89%',
                            marginTop: 5,
                            fontWeight: '600',
                            MozUserSelect: 'none',
                            WebkitUserSelect: 'none',
                            msUserSelect: 'none'
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
                    fontSize: 12,
                    MozUserSelect: 'none',
                    WebkitUserSelect: 'none',
                    msUserSelect: 'none'
                }}
                customStyle={{
                    backgroundColor: '#f2f4f5',
                    borderRadius: 5
                }}
            >
                {API_REQUEST}
            </SyntaxHighlighter>
        </Modal>
    )
}
const enhance = compose(
    withState('isCopied', 'copyRequest', false),
    withState('numLabeled', 'switchLabeled', '143'),
    withState('currentFormat', 'changeFormat', 'JSON'),
    withHandlers({
        handleCopy: props => event => {
            props.copyRequest(true)
            setTimeout(function() {
                props.copyRequest(false)
            }, 1500)
        },
        cancelDataRequest: props => event => {
            store.dispatch(stopDataRequest())
        },
        changeAmountLabeled: props => event => {
            const numLabeled = 143
            const amountLabeled = Math.round(numLabeled * (event / 100))
            props.switchLabeled(amountLabeled)
        },
        switchFormat: props => event => {
            props.changeFormat(event)
        }
    })
)

const mapStateToProps = (state, ownProps) => {
    return {
        projectID: state.dataRequest.projectID
    }
}
const ConnectRequestData = connect(mapStateToProps)(RequestData)

export default enhance(ConnectRequestData)
