import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import { Row, Col, Button } from 'antd'

const TextSentiment = ({ handlePositive, handleNeutral, handleNegaive }) => {
    return (
        <Row>
            <Col span={20} offset={2} style={{ marginBottom: 25 }}>
                <p style={{ fontSize: 16, color: '#36454f' }}>
                    Everyone in my family liked the trail but thought it was too
                    challenging for the less athletic among us. Not necessarily
                    recommended for small children.
                </p>
            </Col>
            <Col span={20} offset={2} style={{ marginBottom: 15 }}>
                <p style={{ fontSize: 15, color: 'gray' }}>
                    What is the sentiment of this text? *
                </p>
            </Col>
            <Col span={20} offset={2}>
                <Row type="flex" justify="space-between">
                    <Button onClick={handlePositive}>Positive</Button>

                    <Button onClick={handleNeutral}>Neutral</Button>

                    <Button onClick={handleNegaive}>Negative</Button>
                </Row>
            </Col>
        </Row>
    )
}
const enhance = compose(
    withHandlers({
        handlePositive: props => event => {
            console.log('positive')
        },
        handleNeutral: props => event => {
            console.log('neutral')
        },
        handleNegaive: props => event => {
            console.log('negative')
        }
    })
)
export default enhance(TextSentiment)
