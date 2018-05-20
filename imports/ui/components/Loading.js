import React from "react"
import Lottie from "react-lottie"
import { Row, Col } from "antd"

import animationData from "../../assets/lotties/loader.json"

const Loading = ({ height }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }
    return (
        <Row
            justifycontnet="center"
            style={{ marginTop: 10, marginBottom: 20 }}
        >
            <Lottie
                options={defaultOptions}
                height={height}
                isStopped={false}
                isPaused={false}
            />
        </Row>
    )
}

export default Loading
