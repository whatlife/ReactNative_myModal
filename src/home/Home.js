import React , { Component } from 'react';
import { View , StyleSheet, Navigator } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import UIDemo from '../commonUI/Demo';
import ViewPull from '../pullView/ViewPull';
import ScrollViewDemo from '../scrollViewToTop/ScrollViews';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {refreshing: false};
    }

   render() {
       return (
           <View style={{flex:1}}>
               <ScrollableTabView >
                   <UIDemo tabLabel='弹框组件'/>
                   <ViewPull tabLabel='下拉刷新'/>
                   <ScrollViewDemo tabLabel='回到顶部' />
               </ScrollableTabView>
           </View>
       );
   }
}

