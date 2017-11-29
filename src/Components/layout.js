import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class layout extends Component {
    render() {
         return (
             <View style={styles.Container}>
                <View style={styles.row1}>
                </View>
                <View style={styles.row2}>
                    <View style={styles.row3}>
                    </View>
                </View>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row'
    },
    row1: {
        flex: 0.5,
        backgroundColor: 'blue'
    },
    row2: {
        flex: 0.5,
        backgroundColor: 'red'
    },
    row3: {
        flex: 0.25,
        backgroundColor: 'pink'
    }
});
  
  export default layout;