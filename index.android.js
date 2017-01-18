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
    TouchableOpacity
} from 'react-native';

import Confirm from './src/commonUI/Confirm';
import Alerts from './src/commonUI/Alerts';

export default class ReactNative_myModal extends Component {
    _alertOnPress = () => {
        this.refs.alerts.open();
    };

    _confirmOnPress = () => {
        this.refs.confirm.open();
    };
    _confirmOnPress1 = () => {
        this.refs.confirm1.open();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>

                <View style={styles.row}>
                <TouchableOpacity onPress = {this._alertOnPress.bind(this)}
                                  activeOpacity={.5}
                                  style={[{ backgroundColor: 'green'}]}>
                    <Text style={styles.instructions}>我是Alert，点击我看效果</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress = {()=>{this._confirmOnPress()}}
                                      activeOpacity={.5}
                                      style={[{ backgroundColor: 'green'}]}>
                        <Text style={styles.instructions}>我是Confirm，点击我看效果</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress = {()=>{this._confirmOnPress1()}}
                                      activeOpacity={.5}
                                      style={[{ backgroundColor: 'green'}]}>
                        <Text style={styles.instructions}>我是Confirm，点击我看效果</Text>
                    </TouchableOpacity>
                </View>
                <Alerts ref='alerts'
                        title='提示信息'
                        btnText='确定'
                        msg={'提示信息提\n示信息提示\n信息提示信\n息提示信息\n提示信息！'}
                        callback={()=>{}}
                />
                <Confirm ref='confirm'
                         rejectFunc={() => {alert('Reject fun!')}}
                         approveFunc={() => {alert('Approve fun!')}}
                         btnRejectText='取消'
                         btnApproveText='连接网络'
                         title='网络连接提示'
                         msg={`没有连接到网络！\n请检查您的网络设备\n我的确定按钮在右边`}
                         textAlign='left'
                         swap={true}
                />
                <Confirm ref='confirm1'
                         rejectFunc={() => {alert('Reject fun!')}}
                         approveFunc={() => {this._alertOnPress()}}
                         btnRejectText='取消'
                         btnApproveText='继续，烧流量下载'
                         title='移动网络提示'
                         msg={`您正在使用移动网络！\n文件大小(20.M)，是否确认继续下载？\n我的确定按钮在左边`}
                         textAlign='left'
                         swap={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    row: {
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('ReactNative_myModal', () => ReactNative_myModal);
