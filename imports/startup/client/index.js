import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.min.css';
import App from '../../ui/layouts/App.js';
import reducer from '../../reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

Meteor.startup(() => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('render-target')
    );
});
