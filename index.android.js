/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Home from './src/home/Home';
export default class ReactNative_myModal extends Component {


    render() {
        return (
            <Home/>
        );
    }
}

AppRegistry.registerComponent('ReactNative_myModal', () => ReactNative_myModal);
