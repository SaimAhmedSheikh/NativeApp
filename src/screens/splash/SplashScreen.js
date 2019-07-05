import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
    const { viewStyle, textStyle, logoStyle } = styles;
    return (
    <View style={viewStyle} name='conntainer'>
        <Image 
            style={logoStyle}
            source={require('./logo-label.png')} 
            name='logo-image' 
        />
        <Text style={textStyle} name='logo'>Loading ...</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 100,
    },
    logoStyle: {
        marginLeft: 50,
        marginRight: 50
    }
});
export default SplashScreen;
