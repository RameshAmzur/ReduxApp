import React, { Component } from 'react';
import { View } from 'react-native';
import ListComponent from './components/ListComponent';
import ListItemDetails from './components/ListItemDetails';
class SecondPage extends Component {

    render() {
        return (
            <View style={{ flex: 2, flexDirection: 'row' }}>
                <ListComponent></ListComponent>
                <ListItemDetails></ListItemDetails>
            </View>
        )

    }
}


export default SecondPage;