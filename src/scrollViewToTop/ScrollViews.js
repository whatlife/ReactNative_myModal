import React, {Component} from "react";
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default class ScrollViewsDemo extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        this.refs._scrollView.scrollTo({
            x: 0,
            y: 0,
            animated: true
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress}>
                    <Text>to top</Text>
                </TouchableOpacity>
                <ScrollView ref='_scrollView'>
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                    <Text>8</Text>
                    <Text>9</Text>
                    <Text>10</Text>
                    <Text>11</Text>
                    <Text>12</Text>
                    <Text>13</Text>
                    <Text>14</Text>
                    <Text>15</Text>
                    <Text>1***************</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text><Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                    <Text>8</Text>
                    <Text>9</Text>
                    <Text>10</Text>
                    <Text>11</Text>
                    <Text>12</Text>
                    <Text>13</Text>
                    <Text>14</Text>
                    <Text>15</Text>
                    <Text>1***************</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text><Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                    <Text>8</Text>
                    <Text>9</Text>
                    <Text>10</Text>
                    <Text>11</Text>
                    <Text>12</Text>
                    <Text>13</Text>
                    <Text>14</Text>
                    <Text>15</Text>
                    <Text>1***************</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text><Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                    <Text>8</Text>
                    <Text>9</Text>
                    <Text>10</Text>
                    <Text>11</Text>
                    <Text>12</Text>
                    <Text>13</Text>
                    <Text>14</Text>
                    <Text>15</Text>
                    <Text>1***************</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                </ScrollView>
            </View>
        )
    }
}