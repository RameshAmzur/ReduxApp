import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
class ListItemDetails extends Component {

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Text> {this.props.selected_tem}</Text>
            </View>


        )
    }

}
const mapStateToProps = state => {

    alert(JSON.stringify(state))
    return {
        selected_tem: state.Selection.selectedItem
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItemDetails)