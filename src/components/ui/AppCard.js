import React from 'react';
import { View, StyleSheet } from 'react-native';

export const AppCard = props => {
    return (
        <View style={ {...styles.default, ...props.style} }>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create ({
    default: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        //Android
        elevation: 10,
        //IOS
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        //
        backgroundColor: '#fff',
        borderRadius: 10
    }
})