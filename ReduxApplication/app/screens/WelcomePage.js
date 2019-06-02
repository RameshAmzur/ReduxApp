
import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Alert } from 'react-native';

class WelcomePage extends Component {
    handleOnPress = () => {
        Alert.alert("1")
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <TouchableOpacity style={{
                    margin: 10
                }}
                >
                    <Button
                        title="First Example"
                        color="#841584"
                        onPress={
                            () => navigate('First')
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    margin: 10
                }}>
                    <Button
                        onPress={
                            () => navigate('Second')
                        }
                        title="Second Example"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </TouchableOpacity>
            </View>
        )
    }

}

export default WelcomePage;
