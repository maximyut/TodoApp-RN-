import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Alert} from 'react-native';
import {THEME} from '../theme';

export const EditModal = ({visible, onCansel, value, onSave}) => {

    const [title, setTitle] = useState(value);

    const saveHandler = () =>{
        if(title.trim().length < 1) {
            Alert.alert('Ошибка!', 'Поле не может быть пустым!');
        } else {
            onSave(title);
        }
    }

    return (
        <Modal 
            visible={visible}
            animationType='fade'>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle} 
                    style={styles.input}
                    autoFocus
                    placeholder="Введите название"
                    maxLength={65}/>
                <View style={styles.btns}>
                    <View style={styles.btn}>
                        <Button 
                            title="Отменить"
                            color={THEME.DANGER_COLOR}
                            onPress={onCansel}/>
                    </View>
                    <View style={styles.btn}>
                        <Button
                            color={THEME.MAIN_COLOR} 
                            title="Сохранить"
                            onPress={saveHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: '80%'
    },
    btns: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn: {
        width: '40%'
    }
})