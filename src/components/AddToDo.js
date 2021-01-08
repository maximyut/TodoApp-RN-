import React, {useState} from 'react';
import { StyleSheet,  View, TextInput, Button, Alert } from 'react-native';
import {THEME} from '../theme';

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('');
    
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            
        } else {
            Alert.alert('Название не может быть пустым');
        } 
        
    };

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Введите название дела..."/>
            <Button 
                title="Добавить" 
                onPress={pressHandler} 
                color="black"/>
        </View>
    )
}

const styles = StyleSheet.create ({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderColor: THEME.MAIN_COLOR,
        borderWidth: 1
    }
})