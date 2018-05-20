import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Layout,
    Row,
    Col,
    Card,
    Form,
    Input,
    Button,
    Icon,
    Checkbox
} from 'antd'
import { connect } from 'react-redux'

const { Header, Footer, Sider, Content } = Layout

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageNames: []
        }
    }
    componentDidMount() {
        Meteor.call('getimages', (err, data) => {
            this.setState({ imageNames: data })
            console.log(data)
        })
    }
    getFile = e => {
        e.preventDefault()
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.onloadend = theFile => {
            var data = {
                blob: theFile.target.result,
                name: file.name
                //visitorId:  this.props.socketio.visitorId
            }
            //console.log(data.blob);
            Meteor.call('file-upload', data)
            //this.props.socketio.emit('file-upload', data);
        }
        console.log(file)
        reader.readAsDataURL(file)
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const { username } = this.props

        return (
            <div>
                <Layout>
                    <Content>
                        <Row style={{ marginTop: '5%' }}>
                            <Col span={7} offset={8}>
                                <h1>{username}</h1>
                                <input
                                    onChange={this.getFile}
                                    id="fileUpload"
                                    type="file"
                                    className="upload"
                                />
                                {this.state.imageNames.map(imageName => (
                                    <img
                                        key={imageName}
                                        src={`https://storage.googleapis.com/alphalearn/${imageName}`}
                                        style={{ width: '70%', height: '70%' }}
                                    />
                                ))}
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        )
    }
}

const WrappedHomeForm = Form.create()(Home)

const mapStateToProps = state => {
    return {
        username: state.auth.user.username
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedHomeForm)
