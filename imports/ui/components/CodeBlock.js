import React, { PureComponent } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { light } from 'react-syntax-highlighter/styles/prism'
import { Col, Tooltip } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withState, withHandlers, compose } from 'recompose'

const CodeBlock = ({ value, isCopied, handleCopy }) => {
    return (
        <div>
            <Tooltip visible={isCopied} title="Copied!">
                <CopyToClipboard text={value} onCopy={handleCopy}>
                    <p
                        style={{
                            position: 'absolute',
                            marginLeft: '62.3%',
                            marginTop: 5,
                            fontWeight: '600'
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
                {value}
            </SyntaxHighlighter>
        </div>
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
        }
    })
)
export default enhance(CodeBlock)
