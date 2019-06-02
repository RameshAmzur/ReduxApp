/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import WelcomePage from './app/screens/WelcomePage';
import Navigation from './app/Navigation';

const store = configureStore();
const RnRedux = () => {
    return (
        <Provider store={store}>
            <Navigation></Navigation>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => RnRedux);
