/**
 * 上传过程中的遮罩层
 * open()
 * close()
 * @author lyl
 * @date 2017年1月17日
 */

import React, { Component, PropTypes } from 'react';
import { Modal, Text, View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    loadModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.55)',
    },
    txt: {
        fontSize: 14,
        color: '#fff',
        alignItems: 'center',
    },
});

export default class Loadings extends Component {
    static defaultProps = {
        msg: '正在加载...',
        callback: () => {},
    };
    static propTypes = {
        msg: PropTypes.string.isRequired,
        callback: PropTypes.func,
    };
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
        };
    }
    open = () => {
        this.setState({ flag: true });
    };

    close = () => {
        this.setState({ flag: false });
    };

    render() {
        const { ...msg } = this.props;
        return (
            <Modal
                animationType={'fade'}
                transparent
                visible={this.state.flag}
                onRequestClose={() => {}}
            >
                <View style={styles.loadModal}>
                    <View>

                        <Text style={styles.txt}><ActivityIndicator size="small" color="white" />{this.props.msg}</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}
