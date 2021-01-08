import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import {AppTitle} from '../components/ui/AppTitle';

export const Todo = ({ todo, onRemove, onOpen}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => onOpen(todo.id)}
            onLongPress={onRemove.bind(null, todo.id)}>
            <View style={styles.todo}>
                <AppTitle style={styles.title}>{todo.title}</AppTitle>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginTop: 10,
    },
    title: {
        padding: 10,
    } 
})