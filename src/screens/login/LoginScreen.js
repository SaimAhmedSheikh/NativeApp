import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EmailInput from '../../components/EmailInput';
import { secondaryColor } from '../../commons/colors';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={viewStyle}>
        <Text style={heading}> LOGIN </Text>
        <EmailInput />
      </View>
    );
  }
}

const { viewStyle, heading } = styles;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 30,
        fontWeight: 600,
        color: secondaryColor
    }
});
