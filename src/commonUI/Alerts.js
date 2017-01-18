/**
 * 提示Alert组件, 替代RN的Alert，兼容iOS，Android
 * @author lyl
 * @date 2017年1月17日
 */

'use strict';

import React, {Component, PropTypes} from 'react';

import {
    StyleSheet,
    View,
    Modal,
    Text,
    Dimensions,
    TouchableHighlight,
    PixelRatio,
} from 'react-native';



export default class Alerts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
        };
    }

    static defaultProps = {
        title: '标题',
        textAlign: 'left', // 标题与提示内容的文本对齐方式， 默认left, 可以：center, right.
        msg: `提示\n信息`, // 用模版字符串，使字符串换行
        btnText: '确定',
        callback: () => {},
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        textAlign: PropTypes.string,
        msg: PropTypes.string.isRequired,
        btnText: PropTypes.string,
        callback: PropTypes.func,
    };
    open = () => {
        this.setState({
            flag: true
        });
    };
    _onPress = () => {
        this.props.callback();
        this.setState({
            flag: false
        });
    };
    render() {
        const {...title} = this.props;
        return (
            <Modal animationType={"fade"}
                   transparent={true}
                   visible={this.state.flag}
                   onRequestClose={() => {}}>
                <View style={styles.alertModal}>
                    <View style={[styles.alert]}>
                        <View style={styles.title}>
                            <Text style={[styles.titleCon, {textAlign: this.props.textAlign}]}>{this.props.title}</Text>
                        </View>
                        <View style={styles.content}>
                        <Text style={styles.text}>{this.props.msg}</Text>
                        </View>
                        <View style={styles.btn}>
                            <TouchableHighlight underlayColor='#eee' onPress={this._onPress} style={styles.btnClick}>
                                <Text style={styles.btnText}>{this.props.btnText}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}


let _width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    alertModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,.45)'
    },
    alert: {
        width: _width * .86,
        backgroundColor: '#fff',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        overflow: 'hidden'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderBottomColor: '#c5c5c5',
        borderBottomWidth: 1 / PixelRatio.get(),
    },
    titleCon: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        paddingLeft: 10,
        color: '#34a3f9',
    },
    content: {
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5,
        marginBottom: 5,
        minHeight: 100,
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        lineHeight: 28,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderTopColor: '#c5c5c5',
        borderTopWidth: 1 / PixelRatio.get(),
        overflow: 'hidden'
    },
    btnClick: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    btnText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        overflow: 'hidden',
        fontSize: 16,
    }
});

