import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.min.css';
import App from '../../ui/layouts/App.js';
import { Provider } from 'react-redux';

import store from '../../store/store';
import { loadUser } from '../../actions/auth'
Meteor.startup(() => {
    store.dispatch(loadUser())
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('render-target')
    );
});
