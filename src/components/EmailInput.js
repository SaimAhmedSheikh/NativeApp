import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { brandColor } from '../commons/colors';

export default class EmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        email: ''
    };
  }

  validateEmail() {
    if (this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return true;
    }
}
  render() {
    return (
        <View style={{ padding: 10 }}>
        <TextInput
          style={inputStyle}
          placeholder='Enter email address'
          onChangeText={(email) => this.setState({ email })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        fontSize: 16,
        color: brandColor
    }
});

const { inputStyle } = styles;
