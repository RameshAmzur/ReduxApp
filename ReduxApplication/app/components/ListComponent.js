import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { itemSelected } from '../actions/ItemSelected';
import { connect } from 'react-redux';
class ListComponent extends Component {
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };
    //handling onPress action  
    getListViewItem = (item) => {
        this.props.selectItem(item.key)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={[
                        { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                        { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
                        { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
                        { key: 'Ruby' }, { key: 'Rails' }, { key: '.Net' },
                        { key: 'Perl' }, { key: 'Sap' }, { key: 'Python' },
                        { key: 'Ajax' }, { key: 'C++' }, { key: 'Ruby' },
                        { key: 'Rails' }, { key: '.Net' }, { key: 'Perl' }
                    ]}
                    renderItem={({ item }) =>
                        <Text
                            onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>

        )

    }

}
const mapStateToProps = state => {


    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectItem: (name) => {
            dispatch(itemSelected(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)
