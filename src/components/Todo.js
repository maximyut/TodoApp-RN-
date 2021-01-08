import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const Todo = ({ todo, onRemove, onOpen}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => onOpen(todo.id)}
            onLongPress={onRemove.bind(null, todo.id)}>
            <View style={styles.todo}>
                <Text style={styles.text}>{todo.title}</Text>
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
    text: {
        padding: 5
    } 
})