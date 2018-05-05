import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import { Row, Col, Radio, Checkbox, Button } from 'antd'

const ImageClassificiation = ({
    handleSelect,
    currentSelect,
    addOption,
    next,
    currentOptions
}) => {
    return (
        <Row>
            <Col span={4}>
                <p
                    style={{
                        fontSize: 16,
                        color: 'gray',
                        MozUserSelect: 'none',
                        WebkitUserSelect: 'none',
                        msUserSelect: 'none'
                    }}
                >
                    Select the car model*
                </p>
                <Row>
                    <Radio.Group onChange={handleSelect} value={currentSelect}>
                        <Radio
                            style={{
                                display: 'block',
                                lineHeight: 3,
                                fontSize: 16
                            }}
                            value="model-x"
                        >
                            Model X
                        </Radio>
                        <Radio
                            style={{
                                display: 'block',
                                lineHeight: 3,
                                fontSize: 16
                            }}
                            value="model-s"
                        >
                            Model S
                        </Radio>
                        <Radio
                            style={{
                                display: 'block',
                                lineHeight: 3,
                                fontSize: 16
                            }}
                            value="model-3"
                        >
                            Model 3
                        </Radio>
                    </Radio.Group>
                </Row>
                <Row style={{ marginTop: 35, marginBottom: 20 }}>
                    <p
                        style={{
                            fontSize: 16,
                            color: 'gray',
                            MozUserSelect: 'none',
                            WebkitUserSelect: 'none',
                            msUserSelect: 'none'
                        }}
                    >
                        Select all that apply
                    </p>
                    <Checkbox.Group
                        style={{ width: '100%' }}
                        onChange={addOption}
                        value={currentOptions}
                    >
                        <Col span={24}>
                            <Checkbox value="blurry" style={{ lineHeight: 3 }}>
                                Blurry
                            </Checkbox>
                        </Col>
                        <Col span={24}>
                            <Checkbox
                                value="over-saturated"
                                style={{ lineHeight: 3 }}
                            >
                                Over Saturated
                            </Checkbox>
                        </Col>
                        <Col spn={24}>
                            <Checkbox
                                value="pixelated"
                                style={{ lineHeight: 3 }}
                            >
                                Pixelated
                            </Checkbox>
                        </Col>
                    </Checkbox.Group>
                </Row>
                {currentSelect != '' && (
                    <Button onClick={next} type="primary">
                        Submit
                    </Button>
                )}
            </Col>
            <Col span={19} offset={1}>
                <Row type="flex" justify="center" align="middle">
                    <img
                        style={{ width: '90%', height: 'auto' }}
                        src="https://storage.googleapis.com/labelbox-example-datasets/tesla/2016-tesla-model-s-17-of-43.jpg"
                    />
                </Row>
            </Col>
        </Row>
    )
}
enhance = compose(
    withState('currentSelect', 'selectItem', ''),
    withState('currentOptions', 'selectOption', []),
    withHandlers({
        handleSelect: props => event => {
            props.selectItem(event.target.value)
            console.log('selected')
        },
        addOption: props => event => {
            props.selectOption(event)
        },
        next: props => event => {
            props.selectItem('')
            props.selectOption([])
        }
    })
)
export default enhance(ImageClassificiation)
