import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: { 
            backgroundColor: '#003171'
        },
        headerTitleStyle: { 
            color: '#EEEEEE',
            alignItems: 'center',
            fontSize: 18,
            fontWeight: '100',
        },
        headerTintColor: '#EEEEEE',
      };
    render() {
        return(
            <View>
                <Text> Login </Text>
            </View>
        );
    }
}