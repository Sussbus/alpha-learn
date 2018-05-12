import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
	state = {
		current: 'mail'
	};
	handleClick = e => {
		console.log('click ', e);
		this.setState({
			current: e.key
		});
	};

	logoutUser = e => {
		Meteor.logout();
	};
	componentWillMount() {
		if (this.props.location.pathname == '/') {
			this.setState({ current: 'home' });
		}
		if (this.props.location.pathname == '/api') {
			this.setState({ current: 'api' });
		}
		if (this.props.location.pathname == '/data') {
			this.setState({ current: 'data' });
		}
		if (this.props.location.pathname == '/profile') {
			this.setState({ current: 'settings:1' });
		}
	}

	render() {
		const { user } = this.props;
		let isLoggedIn = Object.keys(user).length > 0;
		return (
			<Menu
				onClick={this.handleClick}
				selectedKeys={[this.state.current]}
				mode="horizontal"
			>
				<Menu.Item key="home">
					<Link to="/">Alpha Learn</Link>
				</Menu.Item>
				<Menu.Item key="api">
					<Link to="/api">
						<Icon type="code-o" />
						API
					</Link>
				</Menu.Item>
				<Menu.Item key="data">
					<Link to="/data">
						<Icon type="database" />Data
					</Link>
				</Menu.Item>
				{!isLoggedIn ? (
					<Menu.Item key="login">
						<Link to="/login">Login</Link>
					</Menu.Item>
				) : null}
				{isLoggedIn ? (
					<Menu.SubMenu title={<span>Account</span>}>
						<Menu.Item key="setting:1">
							<Link to="/profile">Profile</Link>
						</Menu.Item>
						<Menu.Item key="setting:2">
							<Link to="/settings">Settings</Link>
						</Menu.Item>
						<Menu.Item key="setting:3">Help</Menu.Item>
						<Menu.Item key="setting:4">
							<span onClick={this.logoutUser}>
								Sign Out
							</span>
						</Menu.Item>
					</Menu.SubMenu>
				) : null}
			</Menu>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.auth.user,
		location: ownProps.location
	};
};
const mapDispatchToProps = dispatch => {
	return {};
};
const RouterNavBar = withRouter(NavBar);
export default connect(mapStateToProps, mapDispatchToProps)(RouterNavBar);
