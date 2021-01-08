import React, {useState} from 'react';
import { StyleSheet,  View, TextInput, Alert, Keyboard } from 'react-native';
import {THEME} from '../theme';
import { MaterialIcons } from '@expo/vector-icons'; 

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('');
    
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
            
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
            <MaterialIcons.Button
                style={styles.button} 
                name="post-add"  
                onPress={pressHandler} 
                >
                ДОБАВИТЬ
            </MaterialIcons.Button>
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
        height: 45,
        width: '65%',
        padding: 10,
        borderColor: THEME.MAIN_COLOR,
        borderWidth: 1,
        fontFamily: 'roboto-regular',
    },
    button: {
        height: 40,
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'roboto-regular',
        fontSize: 26
    }
})